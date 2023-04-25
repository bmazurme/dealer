import React from 'react';
import { NavLink } from 'react-router-dom';

import { Urls } from '../../utils/constants';

interface IProps {
  isOpen: boolean;
}

export default function ProfileButton({ isOpen }: IProps) {
  return (
    <NavLink className={`profile-button ${isOpen && 'profile-button_opened'}`} to={Urls.PROFILE.INDEX}>
      <span className="profile-button__label">Аккаунт</span>
      <div className="profile-button__icon" />
    </NavLink>
  );
}
