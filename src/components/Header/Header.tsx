import React, { useState } from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handlerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Logo />
      <Navigation isOpen={isOpen} handlerClick={handlerClick} />
    </header>
  );
}
