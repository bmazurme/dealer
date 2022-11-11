/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Urls } from '../../utils/constants';

interface IProps {
  isOpen: boolean;
}

function ProfileButton({ isOpen }: IProps) {
  return (
    <NavLink className={`profile-button ${isOpen ? 'profile-button_opened' : ''}`} to={Urls.PROFILE.INDEX}>
      <span className="profile-button__label">Аккаунт</span>
      <div className="profile-button__icon" />
    </NavLink>
  );
}

export default ProfileButton;
