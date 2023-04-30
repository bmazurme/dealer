import React from 'react';

import style from './chip.module.css';

export default function Chip({ value, type } : { value: string, type?: string }) {
  return (
    <div className={`${style.chip} ${type === 'outline' && style.chip_outline}`}>
      <span className={style.chip__label}>
        { value }
      </span>
    </div>
  );
}
