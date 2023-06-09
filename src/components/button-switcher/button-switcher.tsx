import React, { useState } from 'react';
import classNames from 'classnames';

import style from './switcher.module.css';

export default function Switcher({ handlerSwitchClick, value, label }
  : { handlerSwitchClick: () => void, value: boolean, label?: string }) {
  const [on, setOn] = useState(value ?? false);
  const onClickHandler = () => {
    setOn(!on);
    handlerSwitchClick();
  };

  return (
    <div className={style.switcher}>
      <span className={style.switcher__label}>{label}</span>
      <button
        type="button"
        aria-label="Switch"
        className={classNames(
          { [style.switcher__button_on]: on },
          { [style.switcher__button]: !on },
        )}
        onClick={onClickHandler}
      />
    </div>
  );
}
