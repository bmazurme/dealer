import React from 'react';

import Cards from '../../components/cards';
import { SearchForm } from '../../forms';

export default function Main() {
  console.log(1);
  return (
    <section className="page">
      <div className="page__content">
        <SearchForm />
        <Cards />
      </div>
    </section>
  );
}
