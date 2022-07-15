import { FC } from 'react';
import styles from '../styles/CircleImage.module.sass';
import Image, { ImageProps } from 'next/image';

type CircleImageType = {
  img: string;
  title: string;
  objectFit: ImageProps['objectFit'];
};

const CircleImage: FC<CircleImageType> = ({ img, title, objectFit }) => {
  return (
    <div className={styles.img__circle}>
      <Image
        className={styles.img__picture}
        src={img}
        alt={title}
        layout="fill"
        objectFit={objectFit}
        priority
      />
      <p className={styles.img__text}>{title}</p>
    </div>
  );
};
export default CircleImage;
