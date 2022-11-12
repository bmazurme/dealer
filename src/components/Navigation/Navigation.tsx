import React, { MouseEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Urls } from '../../utils/constants';
import { INavigationProps } from './INavigationProps';
import ProfileButton from '../ProfileButton';
import Link from '../Link';
import useUser from '../../hook/useUser';
import { useSignOutMutation } from '../../store';

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
      <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`} >
        <ul className={`navigation__links ${isOpen ? 'navigation__links_opened' : ''}`}>
          <Link
            className="navigation__link navigation__link_home"
            to={Urls.MAIN.INDEX}
            label="Main"
            onHandleClick={null}
          />

          {userData?.login ?
            (<>
              {linksProfile.map(({ label, link, className, handler }) => 
                <Link
                  key={label}
                  className={className}
                  to={link}
                  label={label}
                  onHandleClick={handler}
                /> 
              )}
            </>) : null
          }

          {!userData?.login
            ? (<>
                {linksSign.map(({ label, link, className }) => 
                  <Link
                    key={label}
                    className={className}
                    to={link}
                    label={label}
                    onHandleClick={null}
                  /> 
                )}
              </>) : null 
          }
          { userData?.login ? <ProfileButton isOpen /> : null }
        </ul>
      </div>

      <button
        onClick={handlerClick}
        type="button"
        className={`button navigation__button
        ${isOpen ? 'navigation__button_open' : ''}`}
      >
        <span className="label_off">toggle</span>
      </button>
    </>
  );
}
