import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { useForm } from 'react-hook-form';

import { useNewPasswordMutation } from '../../store';
import Form, { FormInputs, FormPayload } from '../Form';
import { Urls } from '../../utils/constants';

export default function PasswordNewForm() {
  const errorHandler = useErrorHandler();
  const [newPassword] = useNewPasswordMutation();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = params;

  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { newPassword: '', confirmPassword: '' } });

  const inputs: FormInputs[] = [
    {
      name: 'newPassword',
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
      name: 'confirmPassword',
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

  const onSubmit = handleSubmit(async (data: Record<string, string>) => {
    try {
      await newPassword({ password: data.newPassword, token: token! });
      navigate(Urls.MAIN.INDEX);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (<Form onSubmit={onSubmit} control={control} inputs={inputs} buttonLabel="Save" />);
}
