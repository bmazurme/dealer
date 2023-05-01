import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import Column from './column';
import MovableItem from './movableI-item';

import { COLUMN_NAMES } from './constants';
import { tasks } from './tasks';

import './app.css';

const {
  DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE,
} = COLUMN_NAMES;

export default function Main() {
  const [items, setItems] = useState(tasks);
  const isMobile = window.innerWidth < 600;

  const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];
        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  const returnItemsForColumn = (columnName: string) => items
    .filter(({ column }) => column === columnName)
    .map(({ id, column, name }, index) => (
      <MovableItem
        key={id}
        name={name}
        currentColumnName={column}
        setItems={setItems}
        index={index}
        moveCardHandler={moveCardHandler}
      />
    ));

  return (
    <div className="container1">
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <Column title={DO_IT} className="column do-it-column">
          {returnItemsForColumn(DO_IT)}
        </Column>
        <Column title={IN_PROGRESS} className="column in-progress-column">
          {returnItemsForColumn(IN_PROGRESS)}
        </Column>
        <Column title={AWAITING_REVIEW} className="column awaiting-review-column">
          {returnItemsForColumn(AWAITING_REVIEW)}
        </Column>
        <Column title={DONE} className="column done-column">
          {returnItemsForColumn(DONE)}
        </Column>
      </DndProvider>
    </div>
  );
}
