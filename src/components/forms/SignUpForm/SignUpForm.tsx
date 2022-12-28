/* eslint-disable no-undef */
import React, { useEffect } from 'react';

import { useErrorHandler } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '../../formui';
import { useSignUpMutation } from '../../../store';
import useUser from '../../../hook/useUser';

export type FormPayload = Omit<User, 'id'>;

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
    name: 'password',
    label: 'Password',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Password is invalid',
    },
    required: true,
    type: 'password',
    autoComplete: 'new-password',
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

export default function SignUpForm() {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const userData = useUser();
  const [signUp] = useSignUpMutation();

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: userData ?? {
      avatar: 'https://localhost.ru',
      firstName: '',
      secondName: '',
      login: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signUp(data);
      navigate('/');
    } catch ({ status, data: { reason } }: unknown) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
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

      <Button className="button button_submit" onClick={onSubmit} variant="outline">Зарегистрировать</Button>
    </form>
  );
}
