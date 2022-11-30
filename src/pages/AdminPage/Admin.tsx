/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import Notification, { NotificationProps } from '../../components/Notification';

export default function Admin() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);
  const onSubmit = () => {
    setNotification({ type: 'success', message: 'message' });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section className="page">
      <div className="page__content">
        content
        <Button className="button button_submit" onClick={onSubmit} variant="outline">Test</Button>
      </div>

      <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
        {notification && (
          <Notification type={notification.type} className="" children={notification.message} />
        )}
      </div>

    </section>
  );
}
