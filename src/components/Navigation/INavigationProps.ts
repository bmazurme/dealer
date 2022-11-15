import { MouseEvent } from 'react';
export interface INavigationProps {
  isOpen: boolean,
  handlerClick: (evt: MouseEvent<HTMLElement>) => void,
}
