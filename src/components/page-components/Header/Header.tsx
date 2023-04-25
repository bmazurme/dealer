/* eslint-disable no-unused-expressions */
import React, { useState, MouseEvent } from 'react';

import Logo from '../logo';
import Navigation from '../../navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = (evt: MouseEvent<HTMLElement>) => {
    evt.currentTarget === evt.target && setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Logo />
      <Navigation isOpen={isOpen} handlerClick={handlerClick} />
    </header>
  );
}
