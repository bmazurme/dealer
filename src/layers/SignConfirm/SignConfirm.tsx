import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';

import { useConfirmUserMutation } from '../../store';
import Logo from '../../components/page-components/Logo';
import SignFooter from '../../components/SignFooter';
import { Urls } from '../../utils/constants';
import links from './links';

export default function SignConfirm() {
  const errorHandler = useErrorHandler();
  const [confirm] = useConfirmUserMutation();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = params;
  const message = 'Message - ok or error';

  useEffect(() => {
    confirm(token!)
      .then(() => {
        if (token) {
          setTimeout(() => (navigate(Urls.SIGN.IN)), 10000);
        }
      })
      .catch(({ status, data: { reason } }) => errorHandler(new Error(`${status}: ${reason}`)));
    return () => {
      console.log('end');
    };
  }, []);

  return (
    <section className="container">
      <Logo />
      <h2 className="sign__title">SignConfirm</h2>
      <p className="page__description">{message}</p>
      <SignFooter links={links} />
    </section>
  );
}
