/* eslint-disable */
import React, { forwardRef } from 'react';
import { type InputHTMLAttributes } from 'react';

type OwnProps = {
  id?: string;
  label?: string;
  errorText?: string;
};

export type InputProps = OwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'>;

const DatePicker = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    errorText = '',
    type,
    onChange,
    label,
    id,
    value,
    placeholder,
  } = props;
  return (
    <div className="input-field">
      {label && <label htmlFor={id} className={`input__label ${errorText ? 'input__label_error' : ''}`}>{label}</label>}
      <input
        ref={ref}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`input ${errorText !== '' ? 'input_error' : ''}`}
      />
      {
        errorText
        && <span className={`${label}-input-error input__label_error`}>{ errorText }</span>
      }
    </div>
  );
});

export default DatePicker;
