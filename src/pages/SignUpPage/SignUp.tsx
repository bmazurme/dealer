/* eslint-disable no-undef */
import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { SignUpForm } from '../../components/forms';
import Logo from '../../components/Logo';
import SignFooter from '../../components/SignFooter';
import useUser from '../../hook/useUser';
import links from './links';

export type FormPayload = Omit<User, 'id'>;

export default function SignUp() {
  const navigate = useNavigate();
  const userData = useUser();

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  });

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">SignUp</h2>
        <SignUpForm />
        <SignFooter links={links} />
      </div>
    </section>
  );
}
