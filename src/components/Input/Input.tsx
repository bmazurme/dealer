/* eslint-disable */
import React, { forwardRef } from 'react';
import { type InputHTMLAttributes } from 'react';

type OwnProps = {
  id?: string;
  label?: string;
  errorText?: string;
};

export type InputProps = OwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    errorText = '',
    type,
    onChange,
    label,
    id,
    value,
  } = props;
  return (
    <div className="inbox">
      {label && <label htmlFor={id} className="inbox__label">{label}</label>}
      <input
        ref={ref}
        onChange={onChange}
        type={type}
        value={value}
        className={`input inbox__input ${errorText !== '' ? 'inbox__input_error' : ''}`}
      />
      {
        errorText
        && <span className={`${label}-input-error inbox__label_error`}>{ errorText }</span>
      }
    </div>
  );
});

export default Input;
