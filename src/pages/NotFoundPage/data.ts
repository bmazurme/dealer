import IError from '../../interfaces';
import { Urls } from '../../utils/routers';

export const data: IError = {
  code: 404,
  text: 'Page not found',
  link: {
    url: Urls.MAIN.INDEX,
    label: 'Back',
  },
};
