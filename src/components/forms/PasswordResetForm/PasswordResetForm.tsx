/* eslint-disable max-len */
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { useForm, Controller } from 'react-hook-form';

import { Input, Button } from '../../formui';
import { Urls } from '../../../utils/constants';

import { useResetPasswordMutation } from '../../../store';

type FormPayload = {
  email: string;
};

interface IProps {
  setNotification: ({ type, message }: { type: 'error' | 'success' | 'notification'; message: string; }) => void;
}

export default function PasswordResetForm({ setNotification }: IProps) {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { email: '' } });
  const [resetPassword] = useResetPasswordMutation();
  const inputs = [
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
  ];

  const onSubmit = handleSubmit(async (data: Record<string, string>) => {
    try {
      const result = await resetPassword(data) as { data: Record<string, string> };
      const { message } = result.data as Record<string, string>;

      setNotification({ type: 'success', message });

      setTimeout(() => navigate(Urls.MAIN.INDEX), 3000);
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
      <Button className="button button_submit" onClick={onSubmit} variant="outline">Reset</Button>
    </form>
  );
}
