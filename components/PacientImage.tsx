import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from '../styles/PacientImage.module.sass';

type PacientImageType = {
  img: string;
  title: string;
  objectFit: ImageProps['objectFit'];
};

const PacientImage: FC<PacientImageType> = ({ title, img, objectFit }) => {
  return (
    <div className={styles.img__wrapper}>
      <Image src={img} alt={title} layout="fill" objectFit={objectFit} priority />
    </div>
  );
};
export default PacientImage;
