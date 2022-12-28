/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { useForm, Controller } from 'react-hook-form';
import { useNewPasswordMutation } from '../../../store';
import { Input, Button } from '../../formui';
import { Urls } from '../../../utils/constants';

type FormPayload = {
  newPassword: string;
  confirmPassword: string;
};

export default function PasswordNewForm() {
  const errorHandler = useErrorHandler();
  const [newPassword] = useNewPasswordMutation();
  const navigate = useNavigate();

  const params = useParams();
  const { token } = params;

  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { newPassword: '', confirmPassword: '' } });

  const inputs = [
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
      console.log({ password: data.newPassword, token: token! });
      await newPassword({ password: data.newPassword, token: token! });
      navigate(Urls.MAIN.INDEX);
    } catch ({ status, data: { reason } }: any) {
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
      <Button className="button button_submit" onClick={onSubmit} variant="outline">Save</Button>
    </form>
  );
}
