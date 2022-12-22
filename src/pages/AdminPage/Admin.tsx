/* eslint-disable react/no-unescaped-entities */
import React, { useState, useMemo } from 'react';

import Button from '../../components/Button/Button';
// import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
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

  return (
    <section className="page">
      <div className="page__content">
        <div className="grid grid_two">
          <Button className="button" onClick={onSubmit} variant="filled">Default</Button>
          <Button className="button button_black" onClick={onSubmit} variant="filled">Black</Button>

          <Button className="button" onClick={onSubmit} variant="filled" disabled>Default disabled</Button>
          <Button className="button button_black" onClick={onSubmit} variant="filled" disabled>Black disabled</Button>

          <Input {...data} value="b@b.com" onChange={() => console.log(123)} />
          <Input {...data} value="b@b.com" onChange={() => console.log(123)} />

          <Input {...data} errorText="Email is invalid" value="b@b" onChange={() => console.log(123)} />
          <Input {...data} errorText="Email is invalid" value="b@b" onChange={() => console.log(123)} />

          <Checkbox label="Checkbox" onClick={() => console.log(234)} />
          <Checkbox className="checkbox__checkmark_black" label="Checkbox" onClick={() => console.log(234)} />

          <Checkbox label="Checkbox" onClick={() => console.log(234)} disabled />
          <Checkbox className="checkbox__checkmark_black" label="Checkbox" onClick={() => console.log(234)} disabled />

          <Chip value="Example" />
          <Chip value="Chip" type="outline" />

          <List value={list} />
          <List value={list} type="line" />

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
