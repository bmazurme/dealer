import React from 'react';

import Card from '../Card';

export default function Cards() {
  const arr = [0, 1, 2, 3, 4, 5];

  return (
    <div className="cards">
      {arr.map((x) => <Card key={x} />)}
    </div>
  );
}
