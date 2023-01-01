/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import src from '../../../images/profile.svg';

export default function Avatar() {
  const handlerEditAvatar = () => {
    console.log('handlerEditAvatar');
  };

  return (
    <div className="avatar" onClick={handlerEditAvatar}>
      <img className="avatar__link" src={src} alt="alt" />
    </div>
  );
}
