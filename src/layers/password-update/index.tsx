import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Notification, { type NotificationProps } from '../../components/core/notification';
import Logo from '../../components/page-components/logo';
import PasswordUpdateForm from './password-update-form';

export default function PasswordUpdate() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);

  return (
    <section className="container">
      <Logo />
      <h2 className="title_h2">Password Update</h2>
      <PasswordUpdateForm setNotification={setNotification} />
      <NavLink className="page__link" to="/profile">Back</NavLink>
      <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
        {notification && (
          <Notification type={notification.type} className="" children={notification.message} />
        )}
      </div>
    </section>
  );
}
