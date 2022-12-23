import React, { useState } from 'react';
import { PasswordResetForm } from '../../components/forms';
import Logo from '../../components/Logo';
import SignFooter from '../../components/SignFooter';
import Notification, { type NotificationProps } from '../../components/Notification';
import links from './links';

export default function PasswordReset() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">Password Reset</h2>
        <PasswordResetForm setNotification={setNotification} />
        <SignFooter links={links} />
      </div>
      <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
        {notification && (
          <Notification type={notification.type} className="" children={notification.message} />
        )}
      </div>
    </section>
  );
}
