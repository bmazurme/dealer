import { Urls } from '../../utils/constants';

const links: Array<Record<string, string>> = [
  { label: 'Main', link: Urls.MAIN.INDEX },
  { label: 'Products', link: Urls.MAIN.PRODUCT.LIST },
  { label: 'Feed', link: Urls.FEED.INDEX },
  { label: 'Test', link: Urls.PRODUCTS.INDEX },
  { label: 'Search', link: Urls.SEARCH.INDEX },
  // {
  //   label: 'SignConfirm',
  //   link: Urls.SIGN.CONFIRM,
  // },
  // {
  //   label: 'NewPassword',
  //   link: Urls.PASSWORD.NEW,
  // },
  { label: 'ServerErrorPage', link: Urls.ERROR[500] },
];

export default links;
