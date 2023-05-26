export { Urls } from './routers';
export { EMAIL_REGEXP } from './regexp';
export const BASE_URL = 'http://localhost:3000/api';

export const Paths = {
  MAIN: '/',
  ABOUT: '/about',
  HISTORY: '/history',
  OAUTH: '/oauth',
  UI_KIT: '/uikit',
  PASSWORD: {
    RESET: '/password/reset',
    UPDATE: '/password/update',
    NEW: '/password/new/:token',
  },
  PROFILE: {
    INDEX: '/profile',
    EDIT: '/profile/edit',
  },
  PROJECT: {
    INDEX: '/project',
    EDIT: '/project/edit',
  },
  SIGN: {
    IN: '/signin',
    UP: '/signup',
    CONFIRM: '/confirm/:token',
  },
};
