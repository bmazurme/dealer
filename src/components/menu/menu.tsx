import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import useUser from '../../hooks/use-user';
import { useSignOutMutation } from '../../store';

import ButtonBurger from '../burger-button';
import ProfileButton from '../profile-button';
import Links, { Link } from '../links';

import { Urls } from '../../utils/constants';

export interface INavigationProps {
  isOpen: boolean,
  handlerClick: (evt: MouseEvent<HTMLElement>) => void,
}

export default function Menu({ isOpen, handlerClick }: INavigationProps) {
  const userData = useUser();
  const navigate = useNavigate();
  const [signOut] = useSignOutMutation();

  const linksSign = [
    { label: 'SignUp', to: Urls.SIGN.UP, className: 'navigation__signup' },
    { label: 'SignIn', to: Urls.SIGN.IN, className: 'navigation__signin' },
  ];

  const linksProfile = [
    {
      label: 'Exit',
      to: Urls.MAIN.INDEX,
      className: 'navigation__link navigation__link',
      onClick: async () => {
        await signOut();
        navigate('/');
      },
    },
    { label: 'Admin', to: Urls.ADMIN.INDEX, className: 'navigation__link navigation__link' },
  ];

  return (
    <>
      <button type="button" className={`navigation ${isOpen && 'navigation_opened'}`} onClick={handlerClick}>
        <ul className={`navigation__links ${isOpen && 'navigation__links_opened'} ${userData?.login && 'navigation__links_rev'}`}>
          <Link className="navigation__link navigation__link_home" to={Urls.MAIN.INDEX} label="Main" />
          {userData?.login && (<Links links={linksProfile} />)}
          {!userData?.login && (<Links links={linksSign} />)}
          {userData?.login && <ProfileButton isOpen />}
        </ul>
      </button>
      <ButtonBurger isOpen={isOpen} handlerClick={handlerClick} />
    </>
  );
}
