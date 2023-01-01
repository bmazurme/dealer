import React from 'react';
import { NavLink } from 'react-router-dom';

import Rating from '../Rating';
import Price from '../Price';

import cardData from './mockData';

export default function Card({ id }: Record<string, number>) {
  const { description, price, img } = cardData;
  return (
    <div className="card">
      <div className="card__container">
        <img className="card__image" src={img.url} alt={img.alt} />
      </div>
      <Price type="rub" price={price} className="card__title" />
      <Rating />
      <NavLink to={`/product/${id}`} className="card__description">
        {description}
      </NavLink>
    </div>
  );
}
