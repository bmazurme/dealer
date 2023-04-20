import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { OauthSignUpForm } from '../../components/forms';
import Logo from '../../components/page-components/Logo';
import useUser from '../../hook/useUser';

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
      <h2 className="sign__title">SignUp</h2>
      <OauthSignUpForm />
    </section>
  );
}
