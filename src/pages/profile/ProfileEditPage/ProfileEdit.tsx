/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ProfileEditForm } from '../../../components/forms';
import Notification, { type NotificationProps } from '../../../components/core/Notification';

export default function ProfileEdit() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);

  return (
    <section className="page">
      <div className="container container_profile">
        <ProfileEditForm setNotification={setNotification} />
        <NavLink className="page__link" to="/profile">Back</NavLink>
        <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
          {notification && (
            <Notification type={notification.type} className="" children={notification.message} />
          )}
        </div>
      </div>
    </section>
  );
}
