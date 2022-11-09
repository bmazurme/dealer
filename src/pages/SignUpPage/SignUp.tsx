import React from 'react';
import Content from '../../components/Content';

export default function SignUp() {
  return (
    <Content heading="SignUp">
      <section className="page">
        <h2 className="page__title">SignUp</h2>
        <p className="page__description">tmp</p>
        <a className="page__link" href="/signin">SignIn</a>
        <a className="page__link" href="/">Reset password</a>
        <a className="page__link" href="/">Back</a>
      </section>
    </Content>
  );
}