import React from 'react';

import { INavigationProps } from '../Navigation/INavigationProps';

export default function ButtonBurger({ isOpen, handlerClick }: INavigationProps) {
  return (
    <button
      onClick={handlerClick}
      type="button"
      className={`button navigation__button
        ${isOpen ? 'navigation__button_open' : ''}`}
    >
      <span className="label_off">toggle</span>
    </button>
  );
}
