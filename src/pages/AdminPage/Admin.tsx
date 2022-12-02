/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

import Button from '../../components/Button/Button';
// import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Chip from '../../components/Chip';
import List from '../../components/List';
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

          <List
            value={[
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
            ]}
          />

          {/* <IconButton className="icon-button" onClick={onSubmit} variant="filled" />
          <IconButton className="icon-button" onClick={onSubmit} variant="filled" /> */}
        </div>
      </div>

      <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
        {notification && (
          <Notification type={notification.type} className="" children={notification.message} />
        )}
      </div>

    </section>
  );
}
