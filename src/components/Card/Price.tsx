import React from 'react';

export default function Price({ type, price }: { type: string, price: number }) {
  const arr: Record<string, string> = {
    rub: '₽',
    us: '$',
  };

  return (<h5 className="card__title">{`${price} ${arr[type] ?? 'y.e.'}`}</h5>);
}
