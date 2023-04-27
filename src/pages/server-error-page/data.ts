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
  code: 500,
  text: 'Server error',
  link: {
    url: Urls.MAIN.INDEX,
    label: 'Back',
  },
};
