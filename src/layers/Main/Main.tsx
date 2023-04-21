import React from 'react';

import Cards from '../../components/Cards';
import { SearchForm } from '../../forms';

export default function Main() {
  return (
    <section className="page">
      <div className="page__content">
        <SearchForm />
        <Cards />
      </div>
    </section>
  );
}
