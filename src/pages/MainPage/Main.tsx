import React from 'react';

export default function Main() {
  return (
    <section className="page">
      <header className="header">
        header
      </header>

      <h2 className="page__title"> Main </h2>

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
  );
}
