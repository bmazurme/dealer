/* eslint-disable */
import React, { forwardRef, useState } from 'react';
import { type InputHTMLAttributes } from 'react';

type OwnProps = {
  id?: string;
  label?: string;
  errorText?: string;
  className?: string;
  disabled?: boolean;
};

export type CheckboxProps = OwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'>;

const Input = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    className,
    errorText = '',
    type = 'checkbox',
    onChange,
    disabled,
    label,
    id,
  } = props;

  const [val, setVal] = useState(false);
  const toggle = () => {
    if (!disabled) {
      setVal(!val);
    }
  };

  const currentClass = ['checkbox'];
  if (disabled) {
    currentClass.push('checkbox_disabled');
  }

  return (
    <div className={currentClass.join(' ')} onClick={toggle}>
      {label && <span className={`checkbox__label ${errorText ? 'checkbox__label_error' : ''}`}>{label}</span>}
      <input
        checked={val}
        disabled={disabled}
        ref={ref}
        onChange={onChange}
        type={type}
        readOnly
        className={`checkbox__input ${errorText !== '' ? 'checkbox__input_error' : ''}`}
      />
      {
        errorText
        && <span className={`${label}-checkbox-error checkbox__label_error`}>{ errorText }</span>
      }
      <span className={`checkbox__checkmark ${className ?? className}`}></span>
    </div>
  );
});

export default Input;
