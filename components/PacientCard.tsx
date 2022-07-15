import { FC } from 'react';
import styles from '../styles/PacientCard.module.sass';
import { PacientCardType } from '../types';
import PacientImage from './PacientImage';

const PacientCard: FC<PacientCardType> = ({ title, img, info, handlerClick, id }) => {
  return (
    <div className={styles.card}>
      <button onClick={() => handlerClick(id)} className={styles.title}>
        {title}
      </button>
      <PacientImage title={title} img={img} objectFit={'cover'} />
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
};
export default PacientCard;
