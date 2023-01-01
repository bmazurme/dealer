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
    text: 'Есть аккаунт?',
    link: {
      url: Urls.SIGN.IN,
      label: 'SignIn',
    },
  },
  {
    text: 'На главную',
    link: {
      url: Urls.MAIN.INDEX,
      label: 'Home',
    },
  },
];

export default links;
