import styles from '../styles/Pacient.module.sass';
import PacientCard from './PacientCard.js';
import adult from '../img/adult.jpg';
import child from '../img/child.jpg';

const infoAdult = [
  {
    id: 1,
    text: 'Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.',
  },
  {
    id: 2,
    text: 'По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.',
  },
  {
    id: 3,
    text: 'По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.',
  },
];
const infoChild = [
  {
    id: 1,
    text: 'Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.',
  },
  {
    id: 2,
    text: 'Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания.',
  },
];

export default function ({ data, handlerClick }) {
  return (
    <div className={styles.pacient}>
      <h2 className={styles.title}>Выберите, кто Ваш пациент:</h2>
      <div className={styles.wrapper}>
        {data.map((elem) => {
          return (
            <PacientCard
              key={elem.id}
              title={elem.title}
              img={elem.img}
              info={elem.info}
              handlerClick={handlerClick}
              id={elem.id}
            />
          );
        })}
      </div>
    </div>
  );
}
