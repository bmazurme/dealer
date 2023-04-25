import React from 'react';

export default function Chip({ value, type } : { value: string, type?: string }) {
  return (
    <div className={`chip ${type === 'outline' && 'chip_outline'}`}>
      <span className="chip__label">
        { value }
      </span>
    </div>
  );
}
