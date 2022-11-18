import React from 'react';

import { useNavigate, NavLink } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { useForm, Controller } from 'react-hook-form';

import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Urls } from '../../utils/constants';

type FormPayload = {
  email: string;
};

export default function PasswordUpdate() {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { email: '' } });

  const inputs = [
    {
      name: 'old-password',
      label: 'Old password',
      pattern: {
        value: /^[a-zA-Z0-9_-]{3,15}$/,
        message: 'Password is invalid',
      },
      required: true,
      type: 'password',
      autoComplete: 'new-password',
    },
    {
      name: 'new-password',
      label: 'New password',
      pattern: {
        value: /^[a-zA-Z0-9_-]{3,15}$/,
        message: 'Password is invalid',
      },
      required: true,
      type: 'password',
      autoComplete: 'new-password',
    },
    {
      name: 'confirm-password',
      label: 'New password confirm',
      pattern: {
        value: /^[a-zA-Z0-9_-]{3,15}$/,
        message: 'Password is invalid',
      },
      required: true,
      type: 'password',
      autoComplete: 'new-password',
    },
  ];

  const footer = [
    {
      text: 'Back',
      link: {
        url: Urls.MAIN.INDEX,
        label: 'Home',
      },
    },
  ];

  const onSubmit = handleSubmit(async () => {
    try {
      navigate(Urls.MAIN.INDEX);
    } catch ({ status, data: { reason } }: any) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">Password Update</h2>
        <form onSubmit={onSubmit}>
          {inputs.map((input) => (
            <Controller
              key={input.name}
              name={input.name as keyof FormPayload}
              rules={{
                pattern: input.pattern,
                required: input.required,
              }}
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  {...input}
                  errorText={fieldState.error?.message}
                />
              )}
            />
          ))}
          <Button className="button button_submit" onClick={onSubmit} variant="outline">Update</Button>
        </form>
        <NavLink className="page__link" to="/profile">
          Back
        </NavLink>
      </div>
    </section>
  );
}
