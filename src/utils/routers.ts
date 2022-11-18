export const Urls = {
  SIGN: {
    UP: '/signup',
    IN: '/signin',
    OUT: '/signout',
    CONFIRM: '/confirm/:token',
  },
  PASSWORD: {
    INDEX: '/password',
    EDIT: '/password/edit',
    RESET: '/password/reset',
    NEW: '/password/new/:token',
  },
  MAIN: {
    INDEX: '/',
    ABOUT: '/about',
    PRIVACY: '/privacy',
    PRIVATE: '/private',
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
