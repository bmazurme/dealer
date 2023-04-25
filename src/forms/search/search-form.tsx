import React from 'react';

import { Input, Button } from '../../components/form-components';

export default function SearchForm() {
  const onSubmit = () => console.log(123);

  return (
    <form className="search-box">
      <Input type="search" placeholder="Поиск товара по каталогу" />
      <Button className="button" onClick={onSubmit} variant="filled">
        Найти
      </Button>
    </form>
  );
}
