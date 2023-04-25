import React, { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useUser from '../../hooks/use-user';
import { useSignUpMutation } from '../../store';
import Form, { FormInputs, FormPayload } from '../Form';

const inputs: FormInputs[] = [
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
];

export default function OauthSignUpForm() {
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
      await signUp(data as Omit<User, 'id' | 'display_name'>);
      navigate('/');
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (<Form onSubmit={onSubmit} inputs={inputs} control={control} buttonLabel="Signup" />);
}
