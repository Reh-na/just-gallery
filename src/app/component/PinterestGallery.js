// components/PinterestGallery.js

import React from 'react';
import styles from './ImageGallery.module.css';

const PinterestGallery = ({ images }) => {
  return (
    <div className={styles['pinterest-gallery']}>
      {images.map((image, index) => (
        <div key={index} className={styles['image-wrapper']}>
          <img src={image.src} alt={image.alt} className={styles['image']} />
        </div>
      ))}
    </div>
  );
};

export default PinterestGallery;
