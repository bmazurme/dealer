import React from 'react';

import { Input, Button } from '../../formui';

export default function SearchForm() {
  const onSubmit = () => {
    console.log(123);
  };

  return (
    <form className="search-box">
      <Input placeholder="Поиск товара по каталогу" />
      <Button className="button" onClick={onSubmit} variant="filled">
        Найти
      </Button>
    </form>
  );
}
