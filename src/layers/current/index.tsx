import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';

import { selectBucket, addItem, removeItem } from '../../store/slices/bucket-slice';

import style from './main.module.css';

const cards = ['1', '2', '3'];

function Card({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const bucket = useAppSelector(selectBucket);
  console.log(bucket);

  return (
    <li className={style.card}>
      <div className={style.img} />
      <h3 className={style.title}>title</h3>
      <p className={style.price}>value</p>
      <button
        type="button"
        disabled={!bucket.find((x) => x.id === id)}
        onClick={() => dispatch(removeItem(id))}
      >
        -
      </button>
      <span>{bucket.find((x) => x.id === id)?.count || 0}</span>
      <button type="button" onClick={() => dispatch(addItem(id))}>
        +
      </button>
    </li>
  );
}

function Cards() {
  return (
    <ul>
      {cards.map((x) => (<Card key={x} id={x} />))}
    </ul>
  );
}

function Tabs() {
  return (
    <ul>
      {cards.map((x) => (<li key={x}>{`Type${x}`}</li>))}
    </ul>
  );
}

export default function Current() {
  return (
    <div className="container">
      <Tabs />
      <Cards />
    </div>
  );
}
