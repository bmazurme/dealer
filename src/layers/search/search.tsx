import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import {
  SearchIcon, OfficeBuildingIcon, LinkIcon, UserIcon, XIcon,
} from '@heroicons/react/solid';
import IconButton from '../../components/icon-button';
import Input from '../../components/input';
import Table from '../product-table';

import style from './search.module.css';

type FormPayload = {
  text?: string;
};

// eslint-disable-next-line max-len
const inputs: { name: string, pattern: { value: RegExp; message: string; }, required?: boolean }[] = [
  {
    name: 'text',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'min 3',
    },
    required: true,
  },
];

export default function Search() {
  const errorHandler = useErrorHandler();
  const [build, setBuild] = useState(true);
  const [link, setLink] = useState(true);

  const toggleBuild = () => setBuild(!build);
  const toggleLink = () => setLink(!link);

  const { control, handleSubmit } = useForm<FormPayload>({ defaultValues: { text: '' } });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const request = {
        requestType: 'globalSearch',
        searchText: data.text,
        searchType: build ? 'organization' : 'person',
        searchArchive: link ? '1' : '0',
      };

      console.log(request);
      // await signIn(data as { email: string, password: string });
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <>
      <form className={style.container} onSubmit={onSubmit}>
        {/* eslint-disable-next-line max-len */}
        {inputs.map((input: { name: string, pattern: { value: RegExp; message: string; }, required?: boolean }) => (
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
                className={style.input}
                errorText={fieldState.error?.message}
              />
            )}
          />
        ))}
        <div className={style.buttons}>
          <IconButton className={style.button} variant="icon" htmlType="submit">
            <SearchIcon className={style.icon} />
          </IconButton>
          <IconButton className={style.button} variant="icon" onClick={toggleBuild}>
            {build
              ? <OfficeBuildingIcon className={style.icon} />
              : <UserIcon className={style.icon} />}
          </IconButton>
          <IconButton className={style.button} variant="icon" onClick={toggleLink}>
            {link
              ? <LinkIcon className={style.icon} />
              : <XIcon className={style.icon} />}
          </IconButton>
        </div>
      </form>
      <Table />
    </>
  );
}
