import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Notification, type NotificationProps } from '../../../components/core';
import { PasswordUpdateForm } from '../../../components/forms';
import Logo from '../../../components/page-components/Logo';

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
          <Notification type={notification.type} children={notification.message} />
        )}
      </div>
    </section>
  );
}
