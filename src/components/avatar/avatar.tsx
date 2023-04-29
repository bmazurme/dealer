import React from 'react';

import style from './avatar.module.css';
import src from '../../images/profile.svg';

export default function Avatar() {
  const handlerEditAvatar = () => {
    console.log('handlerEditAvatar');
  };

  return (
    <button type="button" className={style.avatar} onClick={handlerEditAvatar}>
      <img className={style.avatar__link} src={src} alt="alt" />
    </button>
  );
}
