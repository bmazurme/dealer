/* eslint-disable react/no-unescaped-entities */
import React, { useState, useMemo } from 'react';
import Select, { StylesConfig } from 'react-select';
import DatePicker, { registerLocale } from 'react-datepicker';

import chroma from 'chroma-js';
import ru from 'date-fns/locale/ru';

import Button from '../../components/button';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import SelectButton from '../../components/select-button';

import Module from '../../components/test-module';
import Switcher from '../../components/button-switcher';
import Chip from '../../components/chip';
import List from '../../components/list';
import Table from '../../components/test-table';
import Notification, { NotificationProps } from '../../components/notification';

registerLocale('ru', ru);

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const colourOptions: readonly ColourOption[] = [
  {
    value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true,
  },
  {
    value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true,
  },
  {
    value: 'purple', label: 'Purple', color: '#5243AA',
  },
  {
    value: 'red', label: 'Red', color: '#FF5630', isFixed: true,
  },
  {
    value: 'orange', label: 'Orange', color: '#FF8B00',
  },
  {
    value: 'yellow', label: 'Yellow', color: '#FFC400',
  },
  {
    value: 'green', label: 'Green', color: '#36B37E',
  },
  {
    value: 'forest', label: 'Forest', color: '#00875A',
  },
  {
    value: 'slate', label: 'Slate', color: '#253858',
  },
  {
    value: 'silver', label: 'Silver', color: '#666666',
  },
];

export default function Admin() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);
  const [startDate, setStartDate] = useState(new Date());
  const [select, setSelect] = useState(10);
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

  const tableData: Record<string, string | number>[] = [...Array(100)].map((v, i) => ({
    firstName: 'asmoke',
    lastName: 'literature',
    age: 0,
    visits: i,
    progress: 23,
    status: 'relationship',
    // subRows: undefined,
  }));
  const writeTest = () => console.log('test');

  const colourStyles: StylesConfig<ColourOption, true> = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, {
      // eslint-disable-next-line no-shadow
      data, isDisabled, isFocused, isSelected,
    }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        // eslint-disable-next-line no-nested-ternary
        backgroundColor: isDisabled
          ? undefined
          // eslint-disable-next-line no-nested-ternary
          : isSelected
            ? data.color
            : isFocused
              ? color.alpha(0.1).css()
              : undefined,
        // eslint-disable-next-line no-nested-ternary
        color: isDisabled
          ? '#ccc'
          // eslint-disable-next-line no-nested-ternary
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          // eslint-disable-next-line no-nested-ternary
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    // eslint-disable-next-line no-shadow
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    // eslint-disable-next-line no-shadow
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    // eslint-disable-next-line no-shadow
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };

  return (
    <section className="page">
      <div className="page__content">
        <div className="grid grid_two">

          <Module />
          <Module />

          <Button className="button" onClick={onSubmit} variant="filled">Default</Button>
          <Button className="button button_black" onClick={onSubmit} variant="filled">Black</Button>

          <Button className="button" onClick={onSubmit} variant="filled" disabled>Default disabled</Button>
          <Button className="button button_black" onClick={onSubmit} variant="filled" disabled>Black disabled</Button>

          <div className="input__field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="input__label">
              Date from
            </label>
            <DatePicker
              locale="ru"
              selected={startDate}
              dateFormat="dd.MM.yyyy"
              onChange={(date: Date) => setStartDate(date)}
              customInput={<input className="input inbox__input inbox__input_110" />}
            />
          </div>
          <div className="input__field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="input__label">
              Date from
            </label>
            <DatePicker
              locale="ru"
              selected={startDate}
              dateFormat="dd.MM.yyyy"
              onChange={(date: Date) => setStartDate(date)}
              customInput={<input className="input inbox__input inbox__input_110" />}
            />
          </div>

          <Input {...data} value="b@b.com" onChange={writeTest} />
          <Input {...data} value="b@b.com" onChange={writeTest} />

          <Input {...data} errorText="Email is invalid" value="b@b" onChange={writeTest} />
          <Input {...data} errorText="Email is invalid" value="b@b" onChange={writeTest} />

          <Checkbox label="Checkbox" onClick={writeTest} />
          <Checkbox className="checkbox__checkmark_black" label="Checkbox" onClick={writeTest} />

          <Switcher handlerSwitchClick={() => console.log(1)} value label="Switcher" />
          <Switcher handlerSwitchClick={() => console.log(1)} value={false} label="Switcher" />

          <Checkbox label="Checkbox" onClick={writeTest} disabled />
          <Checkbox className="checkbox__checkmark_black" label="Checkbox" onClick={writeTest} disabled />

          <Chip value="Example" />
          <Chip value="Chip" type="outline" />

          <Select options={options} />
          <Select
            closeMenuOnSelect={false}
            defaultValue={[colourOptions[0], colourOptions[1]]}
            isMulti
            options={colourOptions}
            styles={colourStyles}
          />

          <SelectButton
            value={select}
            classes={{
              list: 'bottom-full',
            }}
            options={[
              { label: 'Show 10 items', value: 10 },
              { label: 'Show 25 items', value: 25 },
              { label: 'Show 50 items', value: 50 },
            ]}
            onChange={setSelect}
          />
          <SelectButton
            value={select}
            classes={{
              list: 'bottom-full',
            }}
            options={[
              { label: 'Show 10 items', value: 10 },
              { label: 'Show 25 items', value: 25 },
              { label: 'Show 50 items', value: 50 },
            ]}
            onChange={setSelect}
            errorText="Data is invalid"
          />

          <SelectButton
            value={select}
            labelText="Select button"
            classes={{
              list: 'bottom-full',
            }}
            options={[
              { label: 'Show 10 items', value: 10 },
              { label: 'Show 25 items', value: 25 },
              { label: 'Show 50 items', value: 50 },
            ]}
            onChange={setSelect}
          />
          <SelectButton
            value={select}
            labelText="Select button"
            classes={{
              list: 'bottom-full',
            }}
            options={[
              { label: 'Show 10 items', value: 10 },
              { label: 'Show 25 items', value: 25 },
              { label: 'Show 50 items', value: 50 },
            ]}
            onChange={setSelect}
            errorText="Data is invalid"
          />

          <List value={list} />
          <List value={list} type="line" />

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
