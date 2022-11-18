import React from 'react';

import { NavLink } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { Urls } from '../../utils/constants';
import fields from './fields';

export default function ProfilePage() {
  return (
    <section className="page">
      <div className="container container_profile">
        <Avatar />

        <ul className="fields">
          {fields.map((field) => (
            <li className="field" key={field.key}>
              <p className="field__label">{field.label}</p>
              <p className="field__value">{field.value}</p>
            </li>
          ))}
        </ul>

        <NavLink className="page__link" to={Urls.PROFILE.EDIT}>Edit Profile</NavLink>
        <NavLink className="page__link" to={Urls.PASSWORD.UPDATE}>Update Password</NavLink>
        <NavLink className="page__link" to={Urls.MAIN.INDEX}>Back</NavLink>
      </div>
    </section>
  );
}
