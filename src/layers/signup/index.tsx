import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignUpForm from './signup-form';
import Logo from '../../components/logo';
import SignFooter from '../../components/sign-footer';
import useUser from '../../hooks/use-user';
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
    <section className="container">
      <Logo />
      <h2 className="title_h2">SignUp</h2>
      <SignUpForm />
      <SignFooter links={links} />
    </section>
  );
}
