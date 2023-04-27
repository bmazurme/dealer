import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ProfileEditForm from './profile-edit-form';
import Notification, { NotificationProps } from '../../components/notification';

type TypeNotification = {
  type: NotificationProps['type'];
  message: string;
};

export default function ProfileEdit() {
  const [notification, setNotification] = useState<TypeNotification | null>(null);

  return (
    <section className="container">
      <ProfileEditForm setNotification={setNotification} />
      <NavLink className="page__link" to="/profile">Back</NavLink>
      <div className={`notification ${!notification === null && 'notification_open'}`}>
        {notification && (
          <Notification type={notification.type} className="" children={notification.message} />
        )}
      </div>
    </section>
  );
}
