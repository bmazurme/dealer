import React, { useEffect } from 'react';

import { useErrorHandler } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo/Logo';
import SignFooter from '../../components/SignFooter';

import { useSignInMutation } from '../../store';
import useUser from '../../hook/useUser';
import { Urls } from '../../utils/constants';

type FormPayload = {
  email: string;
  password: string;
};

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
  {
    name: 'password',
    label: 'Password',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Password is invalid',
    },
    required: true,
    type: 'password',
    autoComplete: 'current-password',
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
    text: 'Забыли пароль?',
    link: {
      url: Urls.PASSWORD.RESET,
      label: 'Reset',
    },
  },
];

export default function SignIn() {
  const errorHandler = useErrorHandler();

  const navigate = useNavigate();
  const userData = useUser();
  const [signIn] = useSignInMutation();

  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { email: '', password: '' } });

  useEffect(() => {
    if (userData) {
      navigate(Urls.MAIN.INDEX);
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signIn(data);
      navigate(Urls.MAIN.INDEX);
    } catch ({ status, data: { reason } }: unknown) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">SignIn</h2>
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
          <Button className="button button_submit" onClick={onSubmit} variant="outline">Войти</Button>
        </form>
        {footer.map((item) => (<SignFooter key={item.link.label} {...item} />))}
      </div>
    </section>
  );
}
