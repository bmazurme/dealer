import React from 'react';
import src from '../../images/profile.svg';

export default function Avatar() {
  const handlerEditAvatar = () => {
    console.log('handlerEditAvatar');
  };

  return (
    <button type="button" className="avatar" onClick={handlerEditAvatar}>
      <img className="avatar__link" src={src} alt="alt" />
    </button>
  );
}
