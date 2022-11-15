import React from 'react';

import { NavLink } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { Urls } from '../../utils/constants';

export default function ProfilePage() {
  return (
    <section className="page">
      <Avatar />
      <NavLink className="page__link" to={Urls.PROFILE.EDIT}>Edit Profile</NavLink>
      <NavLink className="page__link" to={Urls.MAIN.INDEX}>Back</NavLink>
    </section>
  );
}
