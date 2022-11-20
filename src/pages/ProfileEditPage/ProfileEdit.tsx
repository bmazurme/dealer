/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useForm, Controller } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import useUser from '../../hook/useUser';
import Button from '../../components/Button/Button';
import Input from '../../components/Input';

import { FormPayload } from '../SignUpPage/SignUp';

export default function ProfileEdit() {
  const userData = useUser();
  const errorHandler = useErrorHandler();

  const inputs = [
    {
      name: 'firstName',
      label: 'First name',
      pattern: {
        value: /^[a-zA-Zа-яА-ЯёЁ-]{3,15}$/,
        message: 'First name is invalid',
      },
      required: true,
      autoComplete: 'given-name',
    },
    {
      name: 'secondName',
      label: 'Second name',
      pattern: {
        value: /^[a-zA-Zа-яА-ЯёЁ-]{3,15}$/,
        message: 'Second name is invalid',
      },
      required: true,
      autoComplete: 'family-name',
    },
    {
      name: 'login',
      label: 'Login',
      pattern: {
        value: /^[a-z0-9_-]{3,15}$/,
        message: 'Login is invalid',
      },
      required: true,
      autoComplete: 'username',
    },
    {
      name: 'email',
      label: 'Email',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Email is invalid',
      },
      required: true,
      autoComplete: 'email',
    },
    {
      name: 'phone',
      label: 'Phone',
      pattern: {
        value: /^\+?(\d{1})\(?(\d{3})\)?[-|\s]?(\d{3})[-|\s]?(\d{2})[-|\s]?(\d{2})$/,
        message: 'Phone is invalid',
      },
      required: true,
      autoComplete: 'tel',
    },
  ];

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: userData ?? {
      avatar: '',
      first_name: '',
      second_name: '',
      login: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      // await signUp(data);
      // navigate('/');
    } catch ({ status, data: { reason } }: any) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <section className="page">
      <div className="container container_profile">
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

          <Button className="button button_submit" onClick={onSubmit} variant="outline">
            Сохранить
          </Button>
        </form>
        <NavLink className="page__link" to="/profile">
          Back
        </NavLink>
      </div>
    </section>
  );
}
