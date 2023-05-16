import React, { ReactNode } from 'react';
import { useDrop } from 'react-dnd';

// import { COLUMN_NAMES } from './constants';
// const {
//   DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE,
// } = COLUMN_NAMES;

export default function Column({ children, className, title }
  : { children: ReactNode, className: string, title: string }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'Our first type',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: () => true,
    // Override monitor.canDrop() function
    // canDrop: (item: { currentColumnName: string }) => {
    //   const { currentColumnName } = item;
    //   return (true
    //   // currentColumnName === title
    //   // || (currentColumnName === DO_IT && title === IN_PROGRESS)
    //   // || (currentColumnName === IN_PROGRESS
    //   //   && (title === DO_IT || title === AWAITING_REVIEW))
    //   // || (currentColumnName === AWAITING_REVIEW
    //   //   && (title === IN_PROGRESS || title === DONE))
    //   // || (currentColumnName === DONE && title === AWAITING_REVIEW)
    //   );
    // },
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
