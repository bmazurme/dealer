import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { useForm } from 'react-hook-form';

// import { useResetPasswordMutation } from '../../../store';
import Form, { FormInputs, FormPayload } from '../Form';
import { Urls } from '../../../utils/constants';

interface IProps {
  setNotification: ({ type, message }: { type: 'error' | 'success' | 'notification'; message: string; }) => void;
}

export default function ProductCreateForm({ setNotification }: IProps) {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { email: '' } });
  // const [resetPassword] = useResetPasswordMutation();
  const inputs: FormInputs[] = [
    {
      name: 'name',
      label: 'Name',
      required: true,
      autoComplete: 'name',
    },
  ];

  const onSubmit = handleSubmit(async (data: Record<string, string>) => {
    console.log(data);
    try {
      // const result = await resetPassword(data) as { data: Record<string, string> };
      // const { message } = result.data as Record<string, string>;
      const message = '';

      setNotification({ type: 'success', message });
      setTimeout(() => navigate(Urls.MAIN.INDEX), 3000);
    } catch ({ status, data: { reason } }: unknown) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (<Form onSubmit={onSubmit} inputs={inputs} control={control} buttonLabel="Create" />);
}
