/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';

import Star from './Star';
import mockData from './mockData';

interface IStar {
  key?: string,
  clicked: boolean,
  active: boolean,
}

export default function Rating() {
  const [stars, setStars] = useState<IStar[]>(mockData);

  const handleClick = (id: number) => {
    const i = stars.reduce((count: number, item: IStar) => (item.clicked
      ? count += 1 : count), 0);
    const val = (id - i >= -1) ? !stars[id].clicked : true;
    const arr: IStar[] = stars.map(({ active }, index) => (id >= index
      ? { clicked: val, active } : { clicked: false, active }));

    setStars(arr);
  };

  const handleFocus = (id: number) => {
    const arr: IStar[] = stars.map(({ clicked }, index) => (id >= index
      ? { clicked, active: true } : { clicked, active: false }));

    setStars(arr);
  };

  const handleUnFocus = () => {
    const arr: IStar[] = stars.map(({ clicked }) => ({ clicked, active: clicked }));

    setStars(arr);
  };

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <Star
          key={star.key}
          id={index}
          active={star.active}
          handleClick={handleClick}
          handleFocus={handleFocus}
          handleUnFocus={handleUnFocus}
        />
      ))}
    </div>
  );
}
