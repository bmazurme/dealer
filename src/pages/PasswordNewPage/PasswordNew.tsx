import React from 'react';

import { NavLink } from 'react-router-dom';
import { PasswordNewForm } from '../../components/forms';
import Logo from '../../components/Logo';

export default function PasswordNew() {
  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">New Password</h2>
        <PasswordNewForm />
        <NavLink className="page__link" to="/profile">Back</NavLink>
      </div>
    </section>
  );
}
