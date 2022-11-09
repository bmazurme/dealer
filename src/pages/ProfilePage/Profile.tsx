import React from 'react';
import Content from '../../components/Content';

export default function Profile() {
  return (
    <Content heading="Profile">
      <section className="page">
        <h2 className="page__title">Profile</h2>
        <a className="page__link" href="/">Back</a>
      </section>
    </Content>
  );
}
