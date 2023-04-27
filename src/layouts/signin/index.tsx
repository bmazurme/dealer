import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignInForm from './signin-form';
import Logo from '../../components/logo';
import SignFooter from '../../components/sign-footer';
import OauthButtons from '../../components/oauth-buttons';
import useUser from '../../hooks/use-user';
import links from './links';
import { Urls } from '../../utils/constants';

export default function SignIn() {
  const navigate = useNavigate();
  const userData = useUser();

  useEffect(() => {
    if (userData) {
      navigate(Urls.MAIN.INDEX);
    }
  });

  return (
    <section className="container">
      <Logo />
      <h2 className="title_h2">SignIn</h2>
      <SignInForm />
      <SignFooter links={links} />
      <OauthButtons />
    </section>
  );
}
