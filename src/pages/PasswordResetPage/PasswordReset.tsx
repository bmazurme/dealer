import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { useForm, Controller } from 'react-hook-form';

import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SignFooter from '../../components/SignFooter';
import Notification, { type NotificationProps } from '../../components/Notification';

import { Urls } from '../../utils/constants';
import { useResetPasswordMutation } from '../../store';

type FormPayload = {
  email: string;
};

export default function PasswordReset() {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { email: '' } });
  const [resetPassword] = useResetPasswordMutation();
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);

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

  const footer = [
    {
      text: 'Еще не зарегистрированы?',
      link: {
        url: Urls.SIGN.UP,
        label: 'SignUp',
      },
    },
    {
      text: 'Есть аккаунт?',
      link: {
        url: Urls.SIGN.IN,
        label: 'SignIn',
      },
    },
    {
      text: 'На главную',
      link: {
        url: Urls.MAIN.INDEX,
        label: 'Home',
      },
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
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">Password Reset</h2>
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
        {footer.map((item) => (<SignFooter key={item.link.label} {...item} />))}
      </div>
      {notification && (
      <Notification type={notification.type} className="">
        <span>
          {notification.message}
        </span>
      </Notification>
      )}
    </section>
  );
}
