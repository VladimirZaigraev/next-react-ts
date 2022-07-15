import { FC } from 'react';
import styles from '../styles/Symptoms.module.sass';
import { SymptomsType } from '../types';
import img1 from '../img/img1.svg';
import img2 from '../img/img2.svg';
import img3 from '../img/img3.svg';
import img4 from '../img/img4.svg';
import img5 from '../img/img5.svg';
import img6 from '../img/img6.svg';
import img7 from '../img/img7.svg';
import img8 from '../img/img8.svg';
import CarouselBtn from './CarouselBtn';
import CircleImage from './CircleImage';

const infoCarousel = [
  {
    id: 1,
    deg: 355,
    img: img1,
    text: 'Сколиоз',
    top: -30,
    left: 20,
  },
  {
    id: 2,
    deg: 40,
    img: img2,
    text: 'Ограниченная способность поднимать руки и переносить предметы',
    top: -105,
    left: 94,
  },
  {
    id: 3,
    deg: 80,
    img: img3,
    text: 'Нарушения жевания и глотания',
    top: -163,
    left: -34,
    bottom: 237,
  },
  {
    id: 4,
    deg: 125,
    img: img4,
    text: 'Дыхательная недостаточность/ респираторная дисфункция',
    top: -224,
    left: -133,
    bottom: 156,
  },
  {
    id: 5,
    deg: 170,
    img: img5,
    text: 'Неспособность бегать, изменение походки',
    top: -24,
    left: -91,
    bottom: 126,
  },
  {
    id: 6,
    deg: 220,
    img: img6,
    text: 'Контрактура суставов',
    top: -96,
    left: 32,
    bottom: 130,
  },
  {
    id: 7,
    deg: 265,
    img: img7,
    text: 'Вывих бедра',
    top: -30,
    left: -60,
  },
  {
    id: 8,
    deg: 310,
    img: img8,
    text: 'Утомляемость',
    top: -17,
    left: -117,
  },
];

const Symptoms: FC<SymptomsType> = ({ img, title }) => {
  return (
    <div className={styles.symptoms}>
      <p className={styles.text}>
        Сообщает ли один из ваших пациентов о следующих симптомах?{' '}
        <span className={styles.text__smoll}>(нажмите на любую иконку и узнайте больше)</span>
      </p>
      <div className={styles.symptoms__wrapper}>
        <ul className={styles.carousel}>
          {infoCarousel.map((elem) => {
            return (
              <CarouselBtn
                key={elem.id}
                deg={elem.deg}
                img={elem.img.src}
                text={elem.text}
                top={elem.top}
                left={elem.left}
                bottom={elem.bottom}
              />
            );
          })}
        </ul>
        <CircleImage img={img} title={title} objectFit={'cover'} />
      </div>
    </div>
  );
};
export default Symptoms;
