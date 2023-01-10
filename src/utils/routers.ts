export const Urls = {
  SIGN: {
    UP: '/signup',
    IN: '/signin',
    OUT: '/signout',
    CONFIRM: '/confirm/:token',
    OAUTH: '/oauth',
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
    PRODUCT: {
      INDEX: '/product/:id',
      CREATE: '/product/create',
      LIST: '/products/:number',
    },
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
