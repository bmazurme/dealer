import React, { useState } from 'react';
import { ProductCreateForm } from '../../components/forms';
import Notification, { type NotificationProps } from '../../components/core/Notification';

export default function ProductCreate() {
  const [notification, setNotification] = useState<{ type: NotificationProps['type']; message: string; } | null>(null);

  return (
    <section className="page">
      <div className="page__content">
        <ProductCreateForm setNotification={setNotification} />
        <div className={`notification ${notification === null ? '' : 'notification_open'}`}>
          {notification && (
            <Notification type={notification.type} className="" children={notification.message} />
          )}
        </div>
      </div>
    </section>
  );
}
