import { FC } from 'react';
import styles from '../styles/Pacient.module.sass';
import PacientCard from './PacientCard';
import { PacientType } from '../types';

const Pacient: FC<PacientType> = ({ data, handlerClick }) => {
  return (
    <div className={styles.pacient}>
      <h2 className={styles.title}>Выберите, кто Ваш пациент:</h2>
      <div className={styles.wrapper}>
        {data.map((elem) => {
          console.log(elem.img);
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
};
export default Pacient;
