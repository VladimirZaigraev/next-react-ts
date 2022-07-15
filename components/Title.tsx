import { FC } from 'react';
import styles from '../styles/Title.module.sass';
import { titleType } from '../types';

const Title: FC<titleType> = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};
export default Title;
