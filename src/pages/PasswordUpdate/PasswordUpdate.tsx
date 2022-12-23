/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { useForm, Controller } from 'react-hook-form';

import useUser from '../../hook/useUser';
import { useUpdatePasswordMutation } from '../../store';
import Notification, { type NotificationProps } from '../../components/Notification';

import Logo from '../../components/Logo/Logo';
import { Input, Button } from '../../components/formui';

type FormPayload = {
  password: string;
  newPassword: string;
  confirmPassword: string;
};

export default function PasswordUpdate() {
  const errorHandler = useErrorHandler();
  const userData = useUser();

  const { email } = userData! as User;

  const [updatePass] = useUpdatePasswordMutation();
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);
  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { password: '', newPassword: '', confirmPassword: '' } });
  const inputs = [
    {
      name: 'password',
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
    const actions = [];
    const { password, newPassword } = data;
    actions.push(updatePass({ password, newPassword, email }));

    Promise.all(actions)
      .then((message: any) => {
        setNotification({
          type: 'success',
          message: `${message[0]?.error ? 'error' : 'Password updated'}`,
        });
      })
      .then(() => setTimeout(() => setNotification(null), 3000))
      .catch(({ status, data: { reason } }) => errorHandler(new Error(`${status}: ${reason}`)));
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
        <NavLink className="page__link" to="/profile">Back</NavLink>

        <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
          {notification && (
            <Notification type={notification.type} className="" children={notification.message} />
          )}
        </div>

      </div>
    </section>
  );
}
