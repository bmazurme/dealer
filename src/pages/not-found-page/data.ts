import { Urls } from '../../utils/routers';

interface IError {
  code: number,
  text: string,
  link: {
    url: string,
    label: string
  }
}

export const data: IError = {
  code: 404,
  text: 'Page not found',
  link: {
    url: Urls.MAIN.INDEX,
    label: 'Back',
  },
};
