/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, UIEvent } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector, useAppDispatch } from '../../hooks';

import { selectBucket, addItem, removeItem } from '../../store/slices/bucket-slice';

import style from './main.module.css';

type TypeTab = {
  active: boolean;
  value: string;
  onClick: (value: string) => void;
};

const cards = [
  { id: '1', group: 'type-1', name: 'Item 1' },
  { id: '2', group: 'type-1', name: 'Item 2' },
  { id: '3', group: 'type-2', name: 'Item 3' },
  { id: '4', group: 'type-2', name: 'Item 4' },
  { id: '5', group: 'type-2', name: 'Item 5' },
  { id: '6', group: 'type-1', name: 'Item 6' },
  { id: '7', group: 'type-1', name: 'Item 7' },
  { id: '8', group: 'type-2', name: 'Item 8' },
  { id: '9', group: 'type-2', name: 'Item 9' },
  { id: '10', group: 'type-3', name: 'Item 10' },
  { id: '11', group: 'type-3', name: 'Item 11' },
  { id: '12', group: 'type-1', name: 'Item 12' },
];

const groups = [...new Set(cards.map((x) => x.group))]
  .map((x) => ({ group: x, cards: cards.filter((y) => y.group === x) }));

const tabs = [
  { name: 'type-1', active: true },
  { name: 'type-2', active: false },
  { name: 'type-3', active: false },
];

function Card({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const bucket = useAppSelector(selectBucket);
  console.log(bucket);

  return (
    <div className={style.card}>
      <div className={style.img} />
      <h3 className={style.title}>{id}</h3>
      <p className={style.price}>{`${id}0$`}</p>
      <div className={style.footer}>
        <button
          className={style.button}
          type="button"
          disabled={!bucket.find((x) => x.id === id)}
          onClick={() => dispatch(removeItem(id))}
        >
          -
        </button>
        <span className={style.counter}>
          {bucket.find((x) => x.id === id)?.count || 0}
        </span>
        <button
          className={style.button}
          type="button"
          onClick={() => dispatch(addItem(id))}
        >
          +
        </button>
      </div>
    </div>
  );
}

function Cards({ onClickTab }: any) {
  const refs1 = useRef<HTMLLIElement | null>(null);
  const refs2 = useRef<HTMLLIElement | null>(null);
  const refs3 = useRef<HTMLLIElement | null>(null);
  const refs4 = useRef<HTMLLIElement | null>(null);
  const refs = [refs1, refs2, refs3, refs4];

  const groupsWithRef = groups.map((x, i) => (
    { ...x, refCurr: refs[i] }
  ));

  const onScroll = (e: UIEvent<HTMLElement>) => {
    const scroll = e.currentTarget.scrollTop;
    const scrollViewHeight = e.currentTarget.clientHeight;

    const type1 = refs1.current!.scrollHeight!;
    const type2 = refs2.current!.scrollHeight!;
    const type3 = refs3.current!.scrollHeight!;
    const type4 = refs4.current!.scrollHeight!;

    if (scroll < type1) {
      onClickTab('type-1');
    } else if (scroll >= type1 && scroll + scrollViewHeight * 0.5 < type1 + type2) {
      onClickTab('type-2');
    } else if (scroll >= type1 + type2 && scroll + scrollViewHeight * 0.5 < type1 + type2 + type3) {
      onClickTab('type-3');
    } else if (scroll >= type1 + type2 + type3) {
      onClickTab('type-4');
    }
  };

  return (
    <ul className={style.container} onScroll={onScroll}>
      {groupsWithRef.map((x) => (
        <li key={uuidv4()} ref={x.refCurr}>
          <h2 className={style.group_title} id={x.group}>{x.group}</h2>
          <div className={style.groups}>
            {x.cards.map((c) => (<Card key={uuidv4()} id={c.name} />))}
          </div>
        </li>
      ))}
    </ul>
  );
}

function Tab({ value, onClick, active }: TypeTab) {
  return (
    <div
      className={classNames(style.tab, { [style.tab_active]: active })}
      onClick={() => onClick(value)}
    >
      <span className="">
        {value}
      </span>
    </div>
  );
}

function Tabs({ links, onClickTab }
  : { links: any, onClickTab: (name: string) => void }) {
  return (
    <ul className={style.tabs}>
      {links.map((link: any) => (
        <Tab
          key={link.name}
          value={link.name}
          onClick={onClickTab}
          active={link.active}
        />
      ))}
    </ul>
  );
}

export default function Board() {
  const [links, setLinks] = useState(tabs);
  const bucket = useAppSelector(selectBucket);
  const onScroll = (id: string) => {
    const element = document.getElementById(id);
    element!.scrollIntoView();
  };

  const changeGroup = (name: string) => {
    setLinks(tabs.map((x) => ({
      ...x, active: x.name === name,
    })));
  };

  const onToggleTab = (id: string) => {
    changeGroup(id);
    onScroll(id);
  };

  return (
    <div className={style.board}>
      <div>
        <Tabs links={links} onClickTab={onToggleTab} />
        <Cards onClickTab={changeGroup} />
      </div>
      <div>
        bucket
        <ul>
          {bucket.map((x) => (
            <li>
              {x.id}
              <span>{`(${x.count})`}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
