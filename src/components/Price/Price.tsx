import React from 'react';

export default function Price({ type, price, className }
: { type: string, price: number, className: string }) {
  const arr: Record<string, string> = {
    rub: '₽',
    usd: '$',
  };

  return (<h5 className={className}>{`${price} ${arr[type] ?? 'y.e.'}`}</h5>);
}
