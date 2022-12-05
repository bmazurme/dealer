import React from 'react';

export default function List({ value, type } : { value: Record<string, string>[], type?: string }) {
  return (
    <ul className={`list ${type === 'line' ? 'list_line' : ''}`}>
      { value.map((item: Record<string, string>) => (<li key={item.key} className="list__item">{item.name}</li>)) }
    </ul>
  );
}
