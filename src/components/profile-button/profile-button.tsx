import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import style from './profile-button.module.css';

import { Urls } from '../../utils/constants';

interface IProps {
  isOpen: boolean;
}

export default function ProfileButton({ isOpen }: IProps) {
  return (
    <NavLink
      className={classnames(style['profile-button'], { [style['profile-button_opened']]: isOpen })}
      to={Urls.PROFILE.INDEX}
    >
      <span className={style['profile-button__label']}>Аккаунт</span>
      <div className={style['profile-button__icon']} />
    </NavLink>
  );
}
