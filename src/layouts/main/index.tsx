import React from 'react';

import Cards from '../../components/cards';
import SearchForm from './search-form';

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
