import React from 'react';
import Content from '../../components/Content';

export default function SignConfirm() {
  return (
    <Content heading="SignConfirm">
      <section className="page">
        <h2 className="page__title">SignConfirm</h2>
        <p className="page__description">tmp</p>
        <a className="page__link" href="/signup">SignUp</a>
        <a className="page__link" href="/">Reset password</a>
        <a className="page__link" href="/">Back</a>
      </section>
    </Content>
  );
}
