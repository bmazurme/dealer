import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Input, Button } from '../../components/form-components';

export type FormPayload = {
  newPassword?: string;
  confirmPassword?: string;
  email?: string;
  password?: string;
  avatar?: string;
  firstName?: string;
  secondName?: string;
  login?: string;
  phone?: string;
  id?: string;
} | Omit<User, 'id' | 'display_name'>;

export type FormInputs = {
  name: string;
  label: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  required: boolean;
  type?: string;
  autoComplete: string;
};

interface IForm {
  onSubmit: () => void;
  inputs: FormInputs[];
  control: Control<FormPayload, Record<string, string>>;
  buttonLabel: string;
}

export interface INotificationProps {
  type: 'error' | 'success' | 'notification',
  message: string,
}

export default function Form({
  onSubmit, inputs, control, buttonLabel,
}: IForm) {
  return (
    <form onSubmit={onSubmit}>
      {inputs.map((input: FormInputs) => (
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
      <Button className="button button_submit" onClick={onSubmit} variant="outline">
        { buttonLabel }
      </Button>
    </form>
  );
}
