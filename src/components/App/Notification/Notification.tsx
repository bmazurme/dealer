import React, { ReactNode } from 'react';

export type NotificationProps = {
  type: 'error' | 'success' | 'notification',
  children: ReactNode | string,
  className?: string,
};

export default function Notification({ type = 'notification', children, className = '' }: NotificationProps) {
  // const classesOfType = {
  //   error: 'text-error bg-red-200',
  //   success: 'text-success bg-green-200',
  //   notification: 'text-notification bg-orange-200',
  // };

  return (
    <div>
      { children }
    </div>
  );
}
