/* eslint-disable */
import React, { forwardRef } from 'react';
import { type InputHTMLAttributes } from 'react';
import classnames from 'classnames';

type OwnProps = {
  id?: string;
  label?: string;
  errorText?: string;
  className?: string;
};

export type InputProps = OwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className = '',
    errorText = '',
    type,
    onChange,
    label,
    id,
    value,
    placeholder,
  } = props;
  return (
    <div className={classnames('input-field', className) }>
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

export default Input;
