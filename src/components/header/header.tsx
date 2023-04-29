/* eslint-disable no-unused-expressions */
import React, { useState, MouseEvent } from 'react';

import Logo from '../logo';
import Navigation from '../menu';

import style from './header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = (evt: MouseEvent<HTMLElement>) => {
    evt.currentTarget === evt.target && setIsOpen(!isOpen);
  };

  return (
    <header className={style.header}>
      <Logo />
      <Navigation isOpen={isOpen} handlerClick={handlerClick} />
    </header>
  );
}
