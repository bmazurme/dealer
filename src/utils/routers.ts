export const Urls = {
  SIGN: {
    UP: '/signup',
    IN: '/signin',
    OUT: '/signout',
    CONFIRM: '/confirm/:token',
    OAUTH: '/oauth',
    OSIGNUP: '/osignup',
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
  PRODUCTS: {
    INDEX: '/products',
    ID: ':id',
  },
  FEED: {
    INDEX: '/feed',
    ID: ':id',
  },
  SEARCH: {
    INDEX: '/search',
    ID: ':id',
  },
  BPM: {
    INDEX: '/bpm-task',
    ID: ':id',
  },
  ADMIN: {
    INDEX: '/admin',
  },
  BUCKET: {
    INDEX: '/bucket',
  },
  PROFILE: {
    INDEX: '/profile',
    EDIT: 'edit',
    EDIT_PASSWORD: 'edit-password',
  },
  ERROR: {
    404: '/page-not-found',
    500: '/page-server-error',
  },
};
