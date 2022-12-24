/* eslint-disable react/no-unescaped-entities */
import React, { useState, useMemo } from 'react';

import {
  Button,
  Input,
  Checkbox,
  Select,
} from '../../components/formui';
import Chip from '../../components/Chip';
import List from '../../components/List';
import Table from '../../components/Table';
import Notification, { NotificationProps } from '../../components/Notification';

export default function Admin() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);
  const onSubmit = () => {
    setNotification({ type: 'success', message: 'message' });
    setTimeout(() => setNotification(null), 3000);
  };

  const data = {
    name: 'email',
    label: 'Email',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Email is invalid',
    },
    required: true,
    autoComplete: 'email',
  };
  const list = [
    {
      key: 'white',
      name: 'Белый чай',
    },
    {
      key: 'green',
      name: 'Зеленый чай',
    },
    {
      key: 'red',
      name: 'Красный чай',
    },
    {
      key: 'puer',
      name: 'Пуэр',
    },
    {
      key: 'ulun',
      name: 'Улун',
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
            // width: 50,
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
            // width: 50,
          },
          {
            Header: 'Age',
            accessor: 'age',
            // width: 50,
            // align: 'right',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            // width: 50,
            // align: 'right',
          },
          {
            Header: 'Status',
            accessor: 'status',
            // width: 50,
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
            // width: 50,
          },
        ],
      },
    ],
    [],
  );

  const tableData: Record<string, string | number>[] = [
    {
      firstName: 'asmoke',
      lastName: 'literature',
      age: 0,
      visits: 6,
      progress: 23,
      status: 'relationship',
      // subRows: undefined,
    },
    {
      firstName: 'smoke',
      lastName: 'literature',
      age: 0,
      visits: 6,
      progress: 12,
      status: 'relationship',
      // subRows: undefined,
    },
  ];

  const writeTest = () => console.log('test');

  return (
    <section className="page">
      <div className="page__content">
        <div className="grid grid_two">
          <Button className="button" onClick={onSubmit} variant="filled">Default</Button>
          <Button className="button button_black" onClick={onSubmit} variant="filled">Black</Button>

          <Button className="button" onClick={onSubmit} variant="filled" disabled>Default disabled</Button>
          <Button className="button button_black" onClick={onSubmit} variant="filled" disabled>Black disabled</Button>

          <Input {...data} value="b@b.com" onChange={writeTest} />
          <Input {...data} value="b@b.com" onChange={writeTest} />

          <Input {...data} errorText="Email is invalid" value="b@b" onChange={writeTest} />
          <Input {...data} errorText="Email is invalid" value="b@b" onChange={writeTest} />

          <Checkbox label="Checkbox" onClick={writeTest} />
          <Checkbox className="checkbox__checkmark_black" label="Checkbox" onClick={writeTest} />

          <Checkbox label="Checkbox" onClick={writeTest} disabled />
          <Checkbox className="checkbox__checkmark_black" label="Checkbox" onClick={writeTest} disabled />

          <Chip value="Example" />
          <Chip value="Chip" type="outline" />

          <List value={list} />
          <List value={list} type="line" />

          <Select
            value={10}
            classes={{
              list: 'bottom-full',
            }}
            options={[
              { label: 'Show 10 items', value: 10 },
              { label: 'Show 25 items', value: 25 },
              { label: 'Show 50 items', value: 50 },
            ]}
            onChange={writeTest}
          />
          <Select
            value={10}
            classes={{
              list: 'bottom-full',
            }}
            options={[
              { label: 'Show 10 items', value: 10 },
              { label: 'Show 25 items', value: 25 },
              { label: 'Show 50 items', value: 50 },
            ]}
            onChange={writeTest}
          />

          {/* <IconButton className="icon-button" onClick={onSubmit} variant="filled" />
          <IconButton className="icon-button" onClick={onSubmit} variant="filled" /> */}
        </div>
      </div>
      <div className="grid">
        <Table columns={columns} data={tableData} />
      </div>

      <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
        {notification && (
          <Notification type={notification.type} className="" children={notification.message} />
        )}
      </div>

    </section>
  );
}
