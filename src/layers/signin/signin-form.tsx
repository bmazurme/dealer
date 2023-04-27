import React, { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useSignInMutation } from '../../store';
import useUser from '../../hooks/use-user';
import Form, { FormInputs, FormPayload } from '../../components/form';
import { Urls } from '../../utils/constants';

const inputs: FormInputs[] = [
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
    autoComplete: 'current-password',
  },
];

export default function SignInForm() {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const userData = useUser();
  const [signIn] = useSignInMutation();

  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { email: '', password: '' } });

  useEffect(() => {
    if (userData) {
      navigate(Urls.MAIN.INDEX);
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signIn(data as { email: string, password: string });
      navigate(Urls.MAIN.INDEX);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (<Form onSubmit={onSubmit} inputs={inputs} control={control} buttonLabel="Signin" />);
}
