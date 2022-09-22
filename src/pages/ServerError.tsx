import React from 'react';

export default function ServerErrorPage() {
  return (
    <section className="page">
      <h2 className="page__title">500</h2>
      <p className="page__description">Server error</p>
      <a className="page__link" href="/">Back</a>
    </section>
  );
}
