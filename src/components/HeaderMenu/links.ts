import { Urls } from '../../utils/constants';

const links = [
  {
    label: 'Main',
    link: Urls.MAIN.INDEX,
  },
  {
    label: 'About',
    link: Urls.MAIN.ABOUT,
  },
  {
    label: 'Privacy',
    link: Urls.MAIN.PRIVACY,
  },
  {
    label: 'SignConfirm',
    link: Urls.SIGN.CONFIRM,
  },
  {
    label: 'ResetPassword',
    link: Urls.PASSWORD.RESET,
  },
  {
    label: 'ServerErrorPage',
    link: Urls.ERROR[500],
  },
];

export default links;
