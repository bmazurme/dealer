import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import SignFooter from '../../components/SignFooter';
import { Urls } from '../../utils/constants';

export default function SignConfirm() {
  const navigate = useNavigate();
  const params = useParams();
  const { token } = params;
  const message = 'Message - ok or error';

  console.log(token);
  // check token api //

  if (token) {
    setTimeout(() => (navigate(Urls.PROFILE.INDEX)), 10000);
  }

  const footer = [
    {
      text: 'На главную',
      link: {
        url: Urls.MAIN.INDEX,
        label: 'Home',
      },
    },
  ];

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        
        <h2 className="sign__title">SignConfirm</h2>
        <p className="page__description">{message}</p>

        {footer.map((item) => (<SignFooter key={item.link.label} {...item} />))}
      </div>
    </section>
  );
}
