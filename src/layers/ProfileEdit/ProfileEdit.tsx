import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ProfileEditForm } from '../../components/forms';
import { Notification, type NotificationProps } from '../../components/core';

export default function ProfileEdit() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);

  return (
    <section className="container">
      <ProfileEditForm setNotification={setNotification} />
      <NavLink className="page__link" to="/profile">Back</NavLink>
      <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
        {notification && (
          <Notification type={notification.type} className="" children={notification.message} />
        )}
      </div>
    </section>
  );
}
