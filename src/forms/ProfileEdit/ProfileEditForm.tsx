import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useForm } from 'react-hook-form';

import useUser from '../../hooks/use-user';
import { useUpdateUserMutation } from '../../store';
import Form, { FormInputs, FormPayload, INotificationProps } from '../Form';

interface IProps {
  setNotification: (props: INotificationProps | null) => void;
}

export default function ProfileEditForm({ setNotification }: IProps) {
  const userData = useUser();
  const errorHandler = useErrorHandler();
  const [updateUser] = useUpdateUserMutation();

  const inputs: FormInputs[] = [
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
      firstName: '',
      secondName: '',
      login: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  const onSubmit = handleSubmit(async (data: FormPayload) => {
    const actions = [];

    const {
      firstName,
      secondName,
      login,
      email,
      phone,
    } = data;

    actions.push(updateUser({
      firstName,
      secondName,
      login,
      email,
      phone,
    }));

    Promise.all(actions)
      .then(() => setNotification({
        type: 'success',
        message: 'Profile updated',
      }))
      .then(() => setTimeout(() => setNotification(null), 3000))
      .catch(({ status, data: { reason } }) => errorHandler(new Error(`${status}: ${reason}`)));
  });

  return (<Form onSubmit={onSubmit} control={control} inputs={inputs} buttonLabel="Save" />
  );
}
