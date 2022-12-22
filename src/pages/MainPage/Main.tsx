import React from 'react';

import Cards from '../../components/Cards';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Main() {
  const onSubmit = () => {
    console.log(123);
  };

  return (
    <section className="page">
      <div className="page__content">
        <div className="search-box">
          <Input placeholder="Поиск товара по каталогу" />
          <Button className="button" onClick={onSubmit} variant="filled">
            Найти
          </Button>
        </div>
        <Cards />
      </div>
    </section>
  );
}
