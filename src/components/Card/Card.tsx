import React from 'react';

import Rating from '../Rating';
import cardData from './mockData';

export default function Card() {
  return (
    <div className="card">
      <div className="card__container">
        <img
          className="card__image"
          src={cardData.img.url}
          alt={cardData.img.alt}
        />
      </div>

      <h5 className="card__title">
        {cardData.price}
        {' '}
        &#8381;
      </h5>
      <Rating />
      <p className="card__description">
        {cardData.description}
      </p>
    </div>
  );
}
