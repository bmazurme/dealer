import React, { MouseEvent, FormEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import useUser from '../../hook/useUser';
import { useSignOutMutation } from '../../store';

import { Urls } from '../../utils/constants';
import { INavigationProps } from './INavigationProps';

import Link from '../Link';
import ButtonBurger from '../ButtonBurger';
import ProfileButton from '../ProfileButton';

export default function Navigation({ isOpen, handlerClick }: INavigationProps) {
  const userData = useUser();
  const [signOut] = useSignOutMutation();
  const navigate = useNavigate();

  const linksSign = [
    {
      label: 'SignUp',
      link: Urls.SIGN.UP,
      className: 'navigation__signup',
    },
    {
      label: 'SignIn',
      link: Urls.SIGN.IN,
      className: 'navigation__signin',
    },
  ];
  const linksProfile = [
    {
      label: 'Profile Edite',
      link: Urls.PROFILE.EDIT,
      className: 'navigation__link navigation__link',
      handler: null,
    },
    {
      label: 'Exit',
      link: Urls.MAIN.INDEX,
      className: 'navigation__link navigation__link',

      handler: async (event: FormEvent | MouseEvent) => {
        await signOut();
        navigate('/');
      },
    },
  ];

  return (
    <>
      <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
        <ul className={`navigation__links ${isOpen ? 'navigation__links_opened' : ''}`}>
          <Link
            className="navigation__link navigation__link_home"
            to={Urls.MAIN.INDEX}
            label="Main"
            onHandleClick={null}
          />
          {userData?.login
            ? (
              <>
                {linksProfile.map(({
                  label, link, className, handler,
                }) => (
                  <Link
                    key={label}
                    className={className}
                    to={link}
                    label={label}
                    onHandleClick={handler}
                  />
                ))}
              </>
            ) : null}
          {!userData?.login
            ? (
              <>
                {linksSign.map(({ label, link, className }) => (
                  <Link
                    key={label}
                    className={className}
                    to={link}
                    label={label}
                    onHandleClick={null}
                  />
                ))}
              </>
            ) : null}
          { userData?.login ? <ProfileButton isOpen /> : null }
        </ul>
      </div>
      <ButtonBurger isOpen={isOpen} handlerClick={handlerClick} />
    </>
  );
}
