import { Urls } from '../../../utils/constants';

const fields = [
  {
    label: 'First Name',
    key: 'firstName',
  },
  {
    label: 'Second Name',
    key: 'secondName',
  },
  {
    label: 'Email',
    key: 'email',
  },
  {
    label: 'Phone',
    key: 'phone',
  },
];

const links = [
  {
    label: 'Edit Profile',
    url: Urls.PROFILE.EDIT,
  },
  {
    label: 'Update Password',
    url: Urls.PASSWORD.UPDATE,
  },
  {
    label: 'Back',
    url: Urls.MAIN.INDEX,
  },
];

export default fields;
export { links };
