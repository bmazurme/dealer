import React, { useState } from 'react';

import PasswordResetForm from './password-reset-form';
import Logo from '../../components/logo';
import SignFooter from '../../components/sign-footer';
import Notification, { type NotificationProps } from '../../components/notification';

import links from './links';

export default function PasswordReset() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);

  return (
    <section className="container">
      <Logo />
      <h2 className="title_h2">Password Reset</h2>
      <PasswordResetForm setNotification={setNotification} />
      <SignFooter links={links} />

      <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
        {notification && (
          <Notification type={notification.type} className="" children={notification.message} />
        )}
      </div>
    </section>
  );
}
