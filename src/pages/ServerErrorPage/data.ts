import { IError } from 'interfaces/IError';
import { Urls } from '../../utils/routers';

export const data: IError = {
  code: 500,
  text: 'Server error',
  link: {
    url: Urls.MAIN.INDEX,
    label: 'Back',
  },
};
