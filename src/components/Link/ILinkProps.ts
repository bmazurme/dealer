import { MouseEvent, FormEvent } from 'react';

export interface ILinkProps {
  className: string,
  to: string,
  label: string,
  onHandleClick: ((event: FormEvent | MouseEvent) => void) | null,
}
