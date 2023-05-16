import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useForm } from 'react-hook-form';

import useUser from '../../hooks/use-user';
import { useUpdatePasswordMutation } from '../../store';
import Form, { FormInputs, FormPayload } from '../../components/form';

interface INotificationProps {
  type: 'error' | 'success' | 'notification',
  message: string,
}

interface IProps {
  setNotification: (props: INotificationProps | null) => void;
}

const inputs: FormInputs[] = [
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

export default function PasswordUpdateForm({ setNotification }: IProps) {
  const errorHandler = useErrorHandler();
  const userData = useUser();
  const { email } = userData! as User;
  const [updatePass] = useUpdatePasswordMutation();
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: { password: '', newPassword: '', confirmPassword: '' },
  });

  const onSubmit = handleSubmit(async ({ password, newPassword }: Record<string, string>) => {
    const actions = [];
    actions.push(updatePass({ password, newPassword, email }));

    Promise.all(actions)
      .then((message: unknown) => {
        setNotification({
          type: 'success',
          message: `${(message as Record<string, string>[])[0]?.error ? 'error' : 'Password updated'}`,
        });
      })
      .then(() => setTimeout(() => setNotification(null), 3000))
      .catch(({ status, data: { reason } }) => errorHandler(new Error(`${status}: ${reason}`)));
  });

  return (<Form onSubmit={onSubmit} inputs={inputs} control={control} buttonLabel="Update" />);
}
