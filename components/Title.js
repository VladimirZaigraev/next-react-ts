import styles from '../styles/Title.module.sass';

export default function ({ text }) {
  return <h1 className={styles.title}>{text}</h1>;
}
