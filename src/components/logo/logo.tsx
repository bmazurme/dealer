import React from 'react';
import { NavLink } from 'react-router-dom';

import { Urls } from '../../utils/constants';

import style from './logo.module.css';

export default function Logo() {
  return (
    <NavLink className={style.logo} to={Urls.MAIN.INDEX}>
      <div className={style.logo__icon} />
    </NavLink>
  );
}
