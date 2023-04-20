import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignInForm } from '../../components/forms';
import Logo from '../../components/page-components/Logo';
import SignFooter from '../../components/SignFooter';
import OauthButtons from '../../components/OauthButtons';
import useUser from '../../hook/useUser';
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
      <h2 className="sign__title">SignIn</h2>
      <SignInForm />
      <SignFooter links={links} />
      <OauthButtons />
    </section>
  );
}
