import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignInForm } from '../../../components/forms';
import Logo from '../../../components/page-components/Logo';
import SignFooter from '../../../components/SignFooter';
import useUser from '../../../hook/useUser';
import links from './links';
import { Urls } from '../../../utils/constants';

export default function SignIn() {
  const navigate = useNavigate();
  const userData = useUser();

  useEffect(() => {
    if (userData) {
      navigate(Urls.MAIN.INDEX);
    }
  });

  return (
    <section className="sign container">
      <Logo />
      <h2 className="sign__title">SignIn</h2>
      <SignInForm />
      <SignFooter links={links} />

      <a className="sign__link" href="https://oauth.yandex.ru/authorize?response_type=code&client_id=c709762dfe3e447999beb343da0bee9f">
        OAUTH
      </a>
    </section>
  );
}
