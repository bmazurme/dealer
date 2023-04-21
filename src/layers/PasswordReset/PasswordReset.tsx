import React, { useState } from 'react';

import { PasswordResetForm } from '../../forms';
import Logo from '../../components/page-components/Logo';
import SignFooter from '../../components/SignFooter';
import Notification, { type NotificationProps } from '../../components/core/Notification';

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
