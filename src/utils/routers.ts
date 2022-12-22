export const Urls = {
  SIGN: {
    UP: '/signup',
    IN: '/signin',
    OUT: '/signout',
    CONFIRM: '/confirm/:token',
  },
  PASSWORD: {
    INDEX: '/password',
    UPDATE: '/password/update',
    RESET: '/password/reset',
    NEW: '/password/new/:token',
  },
  MAIN: {
    INDEX: '/',
    ABOUT: '/about',
    DELIVERY: '/delivery',
    PRIVACY: '/privacy',
    PRIVATE: '/private',
    PRODUCT: '/product',
  },
  ADMIN: {
    INDEX: '/admin',
  },
  BUCKET: {
    INDEX: '/bucket',
  },
  PROFILE: {
    INDEX: '/profile',
    EDIT: '/profile/edit',
  },
  ERROR: {
    404: '/page-not-found',
    500: '/page-server-error',
  },
};
