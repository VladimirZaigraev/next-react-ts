import styles from '../styles/Symptoms.module.sass';
import React, { useState } from 'react';

export default function ({ deg, img, text, top, left, right, bottom }) {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <li className={styles.carousel__item} style={{ transform: `rotate(${deg}deg)` }}>
      <button
        className={styles.carousel__button}
        onClick={() => setActive(!active)}
        style={{
          transform: `rotate(-${deg}deg)`,
          backgroundImage: `url(${img.src})`,
        }}></button>
      <p
        className={active ? styles.carousel__text_active : styles.carousel__text}
        style={{
          transform: `rotate(-${deg}deg)`,
          top: top,
          left: left,
          right: right,
          bottom: bottom,
        }}>
        {text}
      </p>
    </li>
  );
}
