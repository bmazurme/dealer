import React from 'react';

import { NavLink } from 'react-router-dom';

import links from './links';

export default function HeaderMenu() {
  return (
    <div className="headermenu">
      {links.map((item) => (
        <NavLink key={item.label} className="headermenu__link" to={item.link}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
