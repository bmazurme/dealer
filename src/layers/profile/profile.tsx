import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import useUser from '../../hooks/use-user';

import Avatar from '../../components/avatar';
import Field from '../../components/text-field';
import Switcher from '../../components/button-switcher';

import { Paths } from '../../utils/constants';

import ThemeContext from '../../context/theme-context';

export default function ProfilePage() {
  const userData: User | null = useUser();
  const { style, setStyle } = useContext(ThemeContext);
  const toggleTheme = () => setStyle(style === 'light' ? 'dark' : 'light');

  return (
    <div className="container">
      <div className="profile__avatar">
        <Avatar />
      </div>
      <Switcher
        label="Dark theme"
        handlerSwitchClick={toggleTheme}
        value={(localStorage.getItem('wp-theme') === 'dark')}
      />
      <Field label="Login" value={userData!.login} />
      <Field label="E-mail" value={userData!.email} />
      <Field label="Phone" value={userData!.phone} />
      <Field label="First name" value={userData!.firstName} />
      <Field label="Second name" value={userData!.secondName} />
      <Field label="Coins" value="101" />

      <ul className="profile__links">
        <li>
          <NavLink className="profile__link" to={Paths.PROFILE.EDIT}>
            Edit profile
          </NavLink>
        </li>
        <li>
          <NavLink className="profile__link" to={Paths.PROFILE.EDIT_PASSWORD}>
            Update password
          </NavLink>
        </li>
        <li>
          <NavLink
            className="profile__link profile__link_red"
            to={Paths.MAIN}
            onClick={() => console.log('logout')}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
