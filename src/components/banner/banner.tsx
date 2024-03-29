import React from 'react';
import { NavLink } from 'react-router-dom';

import { Urls } from '../../utils/routers';

import style from './banner.module.css';

export default function Banner() {
  return (
    <div className={style.banner}>
      Используя этот сайт, вы соглашаетесь на использование файлов cookie.
      Больше информации — в нашей
      <NavLink to={Urls.MAIN.PRIVACY}>Политике конфиденциальности</NavLink>
    </div>
  );
}
