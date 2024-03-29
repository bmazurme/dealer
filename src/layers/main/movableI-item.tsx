/* eslint-disable no-param-reassign */
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { COLUMN_NAMES } from './constants';

import './app.css';

const {
  DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE,
} = COLUMN_NAMES;

export default function MovableItem({
  name,
  index,
  currentColumnName,
  moveCardHandler,
  setItems,
}: {
  name: string,
  index: number,
  currentColumnName: string,
  moveCardHandler: (dragIndex: number, hoverIndex: number) => void,
  setItems: (fiber: any) => void,
}) {
  const changeItemColumn = (currentItem: {
    index?: number;
    name: string;
    currentColumnName?: string;
  }, columnName: string) => {
    setItems((prevState: any) => prevState.map((e: { name: string; column: string; }) => ({
      ...e,
      column: e.name === currentItem.name ? columnName : e.column,
    })));
  };

  const ref: any = useRef(null);

  const [, drop] = useDrop({
    accept: 'Our first type',
    hover(item: { index: number }, monitor) {
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

  const [{ opacity }, drag] = useDrag({
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
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.4 : 1 }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} className="movable-item" style={{ opacity }}>
      {name}
    </div>
  );
}
