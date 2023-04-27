import React from 'react';
import { NavLink } from 'react-router-dom';

import PasswordNewForm from './password-new-form';
import Logo from '../../components/logo';

export default function PasswordNew() {
  return (
    <section className="container">
      <Logo />
      <h2 className="title_h2">New Password</h2>
      <PasswordNewForm />
      <NavLink className="page__link" to="/profile">Back</NavLink>
    </section>
  );
}
