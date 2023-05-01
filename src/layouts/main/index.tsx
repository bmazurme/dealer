import React, { ReactNode, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import { COLUMN_NAMES } from './constants';
import { tasks } from './tasks';

import './app.css';

const {
  DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE,
} = COLUMN_NAMES;

function MovableItem({
  name,
  index,
  currentColumnName,
  moveCardHandler,
  setItems,
}: {
  name: string,
  index: number,
  currentColumnName: string,
  moveCardHandler: any,
  setItems: any,
}) {
  const changeItemColumn = (currentItem: {
    index?: number;
    name: string;
    currentColumnName?: string;
  }, columnName: string) => {
    setItems((prevState: any[]) => prevState.map((e: { name: string; column: any; }) => ({
      ...e,
      column: e.name === currentItem.name ? columnName : e.column,
    })));
  };

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'Our first type',
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'Our first type',
    item: { index, name, currentColumnName },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult) {
        const { name: currName } = dropResult as { name: string };

        switch (currName) {
          case IN_PROGRESS:
            changeItemColumn(item, IN_PROGRESS);
            break;
          case AWAITING_REVIEW:
            changeItemColumn(item, AWAITING_REVIEW);
            break;
          case DONE:
            changeItemColumn(item, DONE);
            break;
          case DO_IT:
            changeItemColumn(item, DO_IT);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} className="movable-item" style={{ opacity }}>
      {name}
    </div>
  );
}

function Column({ children, className, title }
  : { children: ReactNode, className: string, title: string }) {
  console.log(children);
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'Our first type',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    // Override monitor.canDrop() function
    canDrop: (item: any) => {
      const { currentColumnName } = item;
      return (
        currentColumnName === title
        || (currentColumnName === DO_IT && title === IN_PROGRESS)
        || (currentColumnName === IN_PROGRESS
          && (title === DO_IT || title === AWAITING_REVIEW))
        || (currentColumnName === AWAITING_REVIEW
          && (title === IN_PROGRESS || title === DONE))
        || (currentColumnName === DONE && title === AWAITING_REVIEW)
      );
    },
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return 'rgb(188,251,255)';
      } if (!canDrop) {
        return 'rgb(255,188,188)';
      }
    }

    return '';
  };

  return (
    <div ref={drop} className={className} style={{ backgroundColor: getBackgroundColor() }}>
      <p>{title}</p>
      {children}
    </div>
  );
}

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
    .filter((item) => item.column === columnName)
    .map((item, index) => (
      <MovableItem
        key={item.id}
        name={item.name}
        currentColumnName={item.column}
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
