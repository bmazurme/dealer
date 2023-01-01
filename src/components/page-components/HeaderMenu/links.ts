import { Urls } from '../../../utils/constants';

const links: Array<Record<string, string>> = [
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
    label: 'Delivery',
    link: Urls.MAIN.DELIVERY,
  },
  {
    label: 'Product',
    link: Urls.MAIN.PRODUCT.INDEX,
  },
  {
    label: 'Products',
    link: Urls.MAIN.PRODUCT.LIST,
  },
  {
    label: 'Product Create',
    link: Urls.MAIN.PRODUCT.CREATE,
  },
  // {
  //   label: 'SignConfirm',
  //   link: Urls.SIGN.CONFIRM,
  // },
  // {
  //   label: 'NewPassword',
  //   link: Urls.PASSWORD.NEW,
  // },
  {
    label: 'ServerErrorPage',
    link: Urls.ERROR[500],
  },
];

export default links;
