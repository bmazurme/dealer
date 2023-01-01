import React from 'react';
import { NavLink } from 'react-router-dom';

import useUser from '../../../hook/useUser';
import Avatar from '../../../components/page-components/Avatar';
import fields, { links } from './fields';

export default function ProfilePage() {
  const userData: {
    id: number;
    firstName: string;
    secondName: string;
    displayName: string;
    login: string;
    email: string;
    phone: string;
    avatar?: string;
    password?: string;
  } | null = useUser();
  const getValue = (data: Record<string, string | number>, key: string) => data[key];

  return (
    <section className="page container container_profile">
      <Avatar />
      <h3 className="title title_profile">{userData!.login}</h3>

      <ul className="fields">
        {fields.map(({ key, label }) => (
          <li className="field" key={key}>
            <p className="field__label">{label}</p>
            <p className="field__value">{getValue(userData!, key)}</p>
          </li>
        ))}
      </ul>

      {links.map(({ url, label }, index) => (
        <NavLink key={index} className="page__link" to={url}>
          {label}
        </NavLink>
      ))}
    </section>
  );
}
