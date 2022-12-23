import React from 'react';

import { NavLink } from 'react-router-dom';
import links from './links';

export default function HeaderMenu() {
  return (
    <div className="headermenu">
      {links.map(({ link, label }: Record<string, string>) => (
        <NavLink key={label} className="headermenu__link" to={link}>
          {label}
        </NavLink>
      ))}
    </div>
  );
}
