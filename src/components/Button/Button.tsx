import React from 'react';
import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

type ButtonProps<T extends ElementType> = PropsWithChildren<{
  as?: T;
  className?: string;
  variant: 'filled' | 'outline' | 'link' | 'icon';
}> & Omit<ComponentPropsWithoutRef<T>, 'as' | 'variant' | 'children'>;

export default function Button<T extends ElementType = 'button'>({ as, className, ...props }: ButtonProps<T>) {
  const Component = as ?? 'button';

  return (
    <Component className={className} {...props} />
  );
}
