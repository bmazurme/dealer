import React from 'react';
import { NavLink } from 'react-router-dom';
import { Urls } from '../../utils/constants';

export default function HeaderMenu() {
  return (
    <div className="headermenu">
      <NavLink className="headermenu__link" to={Urls.MAIN.INDEX}>Main</NavLink>
      <NavLink className="headermenu__link" to={Urls.MAIN.ABOUT}>About</NavLink>
      <NavLink className="headermenu__link" to={Urls.MAIN.PRIVACY}>Privacy</NavLink>
      <NavLink className="headermenu__link" to={Urls.SIGN.UP}>SignUp</NavLink>
      <NavLink className="headermenu__link" to={Urls.SIGN.IN}>SignIn</NavLink>
      <NavLink className="headermenu__link" to={Urls.SIGN.CONFIRM}>SignConfirm</NavLink>
      <NavLink className="headermenu__link" to={Urls.PASSWORD.RESET}>ResetPassword</NavLink>
      <NavLink className="headermenu__link" to={Urls.PROFILE.INDEX}>Profile</NavLink>
      <NavLink className="headermenu__link" to={Urls.PROFILE.EDIT}>ProfileEdit</NavLink>
      <NavLink className="headermenu__link" to={Urls.ERROR[404]}>NotFoundPage</NavLink>
      <NavLink className="headermenu__link" to={Urls.ERROR[500]}>ServerErrorPage</NavLink>
    </div>
  );
}
