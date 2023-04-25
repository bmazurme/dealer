import React, { MouseEvent } from 'react';

export default function BurgerButton({ isOpen, handlerClick }: {
  isOpen: boolean,
  handlerClick: (evt: MouseEvent<HTMLElement>) => void,
}) {
  return (
    <button
      onClick={handlerClick}
      type="button"
      className={`button navigation__button ${isOpen && 'navigation__button_open'}`}
    >
      <span className="label_off">toggle</span>
    </button>
  );
}
