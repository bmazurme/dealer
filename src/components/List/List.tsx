import React from 'react';

export default function List({ value, type } : { value: Record<string, string>[], type?: string }) {
  return (
    <ul className={`list ${type === 'outline' ? 'list_outline' : ''}`}>
      { value.map((item: Record<string, string>) => (<li key={item.key} className="list__item">{item.name}</li>)) }
    </ul>
  );
}
