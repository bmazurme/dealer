import React from 'react';
import { NavLink } from 'react-router-dom';

import useUser from '../../hook/useUser';
import Avatar from '../../components/Avatar';
import fields, { links } from './fields';

export default function ProfilePage() {
  const userData: any = useUser();

  return (
    <section className="page">
      <div className="container container_profile">
        <Avatar />

        <h3 className="title title_profile">{userData.login}</h3>

        <ul className="fields">
          {fields.map((field) => (
            <li className="field" key={field.key}>
              <p className="field__label">{field.label}</p>
              <p className="field__value">{userData[field.key]}</p>
            </li>
          ))}
        </ul>

        {links.map((link, index) => (
          <NavLink key={index} className="page__link" to={link.url}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </section>
  );
}
