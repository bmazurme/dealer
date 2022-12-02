import React from 'react';
import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

type IconButtonProps<T extends ElementType> = PropsWithChildren<{
  as?: T;
  className?: string;
  variant: 'filled' | 'outline' | 'link' | 'icon';
  disabled?: boolean;
}> & Omit<ComponentPropsWithoutRef<T>, 'as' | 'variant' | 'children'>;

export default function IconButton<T extends ElementType = 'button'>({
  as, className, disabled, ...props
}: IconButtonProps<T>) {
  const Component = as ?? 'button';

  return (
    <Component
      className={`${className} ${disabled ? 'icon-button_disabled' : ''}`}
      disabled={disabled}
      {...props}
    />
  );
}
