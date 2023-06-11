import React from 'react';
import classNames from 'classnames';

import style from './list.module.css';

export default function List({ value, type }
  : { value: Record<string, string>[], type?: string }) {
  return (
    <ul
      className={classNames(
        style.list,
        { [style.line]: type },
        { [style.list_line]: !type },
      )}
    >
      { value.map((item: Record<string, string>) => (
        <li key={item.key} className={style.list__item}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
