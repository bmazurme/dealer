import React from 'react';
import Content from '../../components/Content';

export default function Privacy() {
  return (
    <Content heading="Privacy">
      <section className="page">
        <header className="header">
          header
        </header>

        <h2 className="page__title">
          Privacy
        </h2>

        <div className="page__content">
          content
        </div>

        <footer className="footer">
          footer
        </footer>

        <div className="banner">
          <button className="banner__close" type="button">X</button>
          <p className="banner__content">banner</p>
        </div>
      </section>
    </Content>
  );
}
