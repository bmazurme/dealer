import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { useForm, Controller } from 'react-hook-form';

import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import SignFooter from '../../components/SignFooter';

import { Urls } from '../../utils/constants';

type FormPayload = {
  email: string;
};

export default function PasswordReset() {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { email: '' } });

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
      text: 'На главную',
      link: {
        url: Urls.MAIN.INDEX,
        label: 'Home',
      },
    },
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
  ];

  const onSubmit = handleSubmit(async (data) => {
    try {
      navigate('/');
    } catch ({ status, data: { reason } }) {
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
    </section>
  );
}
