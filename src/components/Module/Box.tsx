import React from 'react';

export default function Box({ setResult, closePopupEditModule }
  : { setResult: any, closePopupEditModule: () => void }) {
  console.log(setResult, closePopupEditModule);

  return (<div>box</div>);
}
