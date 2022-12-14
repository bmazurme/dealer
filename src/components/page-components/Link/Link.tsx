import React from 'react';
import { NavLink } from 'react-router-dom';

import { ILinkProps } from './ILinkProps';

export default function Link({
  className,
  to,
  label,
  onHandleClick,
}: ILinkProps) {
  return (
    <li>
      <NavLink onClick={onHandleClick!} className={className} to={to}>
        {label}
      </NavLink>
    </li>
  );
}
