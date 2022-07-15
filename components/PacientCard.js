import styles from '../styles/PacientCard.module.sass';
import Image from 'next/image';

export default function ({ title, img, info, handlerClick, id }) {
  return (
    <div className={styles.card}>
      <button onClick={handlerClick} className={styles.title} id={id}>
        {title}
      </button>
      <div className={styles.img__wrapper}>
        <Image src={img} alt={title} layout="fill" objectFit="cover" priority />
      </div>
      <ul className={styles.info__list}>
        {info.map((elem) => {
          return (
            <li key={elem.id} className={styles.info__item}>
              <p className={styles.info__text}>{elem.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
