import React from 'react';

import Button from '../../components/button';
import Input from '../../components/input';

import style from './search-form.module.css';

export default function SearchForm() {
  const onSubmit = () => console.log(123);

  return (
    <form className={style['search-form']}>
      <Input type="search" placeholder="Поиск товара по каталогу" />
      <Button className="button" onClick={onSubmit} variant="filled">
        Найти
      </Button>
    </form>
  );
}
