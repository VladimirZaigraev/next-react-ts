import { FC } from 'react';
import styles from '../styles/Symptoms.module.sass';
import React, { useState } from 'react';
import { CarouselBtnType } from '../types';

const CarouselBtn: FC<CarouselBtnType> = ({ deg, img, text, top, left, bottom }) => {
  const [active, setActive] = useState(false);
  return (
    <li className={styles.carousel__item} style={{ transform: `rotate(${deg}deg)` }}>
      <button
        className={styles.carousel__button}
        onClick={() => setActive(!active)}
        style={{
          transform: `rotate(-${deg}deg)`,
          backgroundImage: `url(${img})`,
        }}></button>
      <p
        className={active ? styles.carousel__text_active : styles.carousel__text}
        style={{
          transform: `rotate(-${deg}deg)`,
          top: top,
          left: left,
          bottom: bottom,
        }}>
        {text}
      </p>
    </li>
  );
};
export default CarouselBtn;
