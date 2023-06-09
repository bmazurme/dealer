import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './header-menu.module.css';

import links from './links';

export default function HeaderMenu() {
  return (
    <div className={style.headermenu}>
      {links.map(({ link, label }: Record<string, string>) => (
        <NavLink key={label} className={style.headermenu__link} to={link}>
          {label}
        </NavLink>
      ))}
    </div>
  );
}
