import React, { MouseEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Urls } from '../../utils/constants';
import Link from '../Link';
import { INavigationProps } from './INavigationProps';
import ProfileButton from '../ProfileButton';
import useUser from '../../hook/useUser';
import { setCredentials, useSignOutMutation } from '../../store';

function Navigation({ isOpen, handlerClick }: INavigationProps) {
  const userData = useUser();
  const dispatch = useDispatch();
  const [signOut] = useSignOutMutation();

  const signOutHandler = (event: FormEvent | MouseEvent) => {
    event.preventDefault();

    signOut().then(() => {
      close();
      dispatch(setCredentials(null));
      localStorage.removeItem('userAuth');
    });
  };

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

          <Link
            className="navigation__link navigation__link_home"
            to={Urls.MAIN.INDEX}
            label="Exit"
            onHandleClick={signOutHandler}
          />



          {!userData?.login
            ? (
              <>
                <Link
                  className="navigation__signup"
                  to={Urls.SIGN.UP}
                  label="Signup"
                  onHandleClick={null}
                />
                <Link
                  className="navigation__signin"
                  to={Urls.SIGN.IN}
                  label="Signin"
                  onHandleClick={null}
                />
              </>
            )
            : null }
          {
            userData?.login ? (<ProfileButton isOpen />) : null
          }
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

export default Navigation;
