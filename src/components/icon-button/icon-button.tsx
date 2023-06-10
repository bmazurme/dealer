import React from 'react';
import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import classnames from 'classnames';

import style from './icon-button.module.css';

type IconButtonProps<T extends ElementType> = PropsWithChildren<{
  as?: T;
  className?: string;
  variant: 'filled' | 'outline' | 'link' | 'icon';
  disabled?: boolean;
  htmlType?: string;
}> & Omit<ComponentPropsWithoutRef<T>, 'as' | 'variant' | 'children'>;

export default function IconButton<T extends ElementType = 'button'>({
  as, className, disabled, htmlType, ...props
}: IconButtonProps<T>) {
  const Component = as ?? 'button';

  return (
    <Component
      className={classnames(className, { [style['icon-button_disabled']]: disabled })}
      disabled={disabled}
      type={htmlType ? 'submit' : 'button'}
      {...props}
    />
  );
}
