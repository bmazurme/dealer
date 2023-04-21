import React, { useState } from 'react';

import Box from './Box';
import Popup from '../Popup';

export default function Module() {
  const [popupEditModule, setPopupEditModule] = useState(false);
  const [result, setResult] = useState(null);
  console.log(result);

  const openPopupEditModule = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPopupEditModule(true);
  };
  const closePopupEditModule = () => setPopupEditModule(false);

  return (
    <>
      <button
        type="button"
        aria-label="Box"
        className="button button_square"
        onClick={openPopupEditModule}
      >
        X
      </button>
      <Popup
        isOpen={popupEditModule}
        onClose={closePopupEditModule}
        children={<Box setResult={setResult} closePopupEditModule={closePopupEditModule} />}
      />
    </>
  );
}
