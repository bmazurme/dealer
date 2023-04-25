import React from 'react';

import cardData from '../../mocks/mock-product';
import Rating from '../../components/rating';

export default function Product() {
  return (
    <section className="page">
      <div className="page__content">
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
    </section>
  );
}
