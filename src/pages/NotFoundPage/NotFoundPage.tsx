import React from 'react';
import { data } from './data';

const { code, text, link } = data;

export default function NotFoundPage() {
  return (
    <section className="error">
      <h2 className="error__code">{code}</h2>
      <p className="error__description">{text}</p>
      <a className="error__link" href="{link.url}">{link.label}</a>
    </section>
  );
}
