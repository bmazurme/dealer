import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { OauthSignUpForm } from '../../forms';
import Logo from '../../components/page-components/logo';
import useUser from '../../hooks/use-user';

export type FormPayload = Omit<User, 'id'>;

export default function OauthSignUp() {
  const navigate = useNavigate();
  const userData = useUser();

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  });

  return (
    <section className="sign container">
      <Logo />
      <h2 className="title_h2">SignUp</h2>
      <OauthSignUpForm />
    </section>
  );
}
