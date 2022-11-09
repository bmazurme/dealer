/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import SignIn from './SignIn';

export default function SignInPage() {
  const handleSign = ({ login, password }: Record<string, string>) => console.log(login, password);
  return (
    <SignIn handleSign={handleSign} />
  );
}
