/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Notification, { type NotificationProps } from '../../../components/core/Notification';
import Logo from '../../../components/page-components/Logo';
import { PasswordUpdateForm } from '../../../components/forms';

export default function PasswordUpdate() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);

  return (
    <section className="sign container">
      <Logo />
      <h2 className="sign__title">Password Update</h2>
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
