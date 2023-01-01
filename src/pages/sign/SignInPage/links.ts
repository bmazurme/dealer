import { Urls } from '../../../utils/constants';

const links = [
  {
    text: 'Еще не зарегистрированы?',
    link: {
      url: Urls.SIGN.UP,
      label: 'SignUp',
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
