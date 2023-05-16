import { Urls } from '../../utils/constants';

const links = [
  {
    text: 'Есть аккаунт?',
    link: {
      url: Urls.SIGN.IN,
      label: 'SignIn',
    },
  },
  {
    text: 'Забыли пароль?',
    link: {
      url: Urls.PASSWORD.RESET,
      label: 'Reset',
    },
  },
];

export default links;
