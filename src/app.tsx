import React, { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import ThemeContext from './context/theme-context';
import ErrorBoundaryWrapper from './components/error-boundary-wrapper';

import AdminPage from './pages/admin-page';
import MainPage from './pages/main-page';

import FeedPage from './pages/feed-page';
import FeedDatailPage from './pages/feed-detail-page';

import BpmTaskPage from './pages/bpm-tast-page';

import OauthPage from './pages/oauth-signin-page';
import OauthSignUpPage from './layers/oauth-signup';
import PasswordNewPage from './pages/password-new-page';
import PasswordResetPage from './pages/password-reset-page';
import PasswordUpdatePage from './pages/password-update-page';
import ProfilePage from './pages/profile-page';
import ProfileEditPage from './pages/profile-edit';
import SearchPage from './pages/search-page';
import SignConfirmPage from './pages/sign-confirm-page';
import SignInPage from './pages/signin-page';
import SignUpPage from './pages/signup-page';
import ServerErrorPage from './pages/server-error-page';
import NotFoundPage from './pages/not-found-page';

import ProductPage from './pages/product-page';

import { Urls } from './utils/routers';

import './index.css';

export default function App() {
  const [style, setStyle] = useState(localStorage.getItem('wp-theme') === 'dark' ? 'dark' : 'light');
  const providerValue = useMemo(() => ({ style, setStyle }), [style, setStyle]);

  useMemo(() => {
    document.documentElement.setAttribute('data-theme', (style === 'dark') ? 'dark' : 'light');
    localStorage.setItem('wp-theme', (style === 'dark') ? 'dark' : 'light');
  }, [style]);

  return (
    <ThemeContext.Provider value={providerValue}>
      <ErrorBoundaryWrapper>
        <Routes>
          <Route index element={(<MainPage />)} />

          <Route path={Urls.SIGN.UP} element={(<SignUpPage />)} />
          <Route path={Urls.SIGN.IN} element={(<SignInPage />)} />
          <Route path={Urls.SIGN.CONFIRM} element={(<SignConfirmPage />)} />
          <Route path={Urls.SIGN.OAUTH} element={(<OauthPage />)} />
          <Route path={Urls.SIGN.OSIGNUP} element={(<OauthSignUpPage />)} />

          <Route path={Urls.PASSWORD.RESET} element={(<PasswordResetPage />)} />
          <Route path={Urls.PASSWORD.NEW} element={(<PasswordNewPage />)} />

          <Route path={Urls.PROFILE.INDEX}>
            <Route index element={(<ProfilePage />)} />
            <Route path={Urls.PROFILE.EDIT} element={(<ProfileEditPage />)} />
            <Route path={Urls.PROFILE.EDIT_PASSWORD} element={(<PasswordUpdatePage />)} />
          </Route>

          <Route path={Urls.PRODUCTS.INDEX}>
            <Route index element={(<ProductPage />)} />
            <Route path={Urls.PRODUCTS.ID} element={(<ServerErrorPage />)} />
          </Route>

          <Route path={Urls.ADMIN.INDEX} element={(<AdminPage />)} />

          <Route path={Urls.FEED.INDEX}>
            <Route index element={(<FeedPage />)} />
            <Route path={Urls.FEED.ID} element={(<FeedDatailPage />)} />
          </Route>

          <Route path={Urls.SEARCH.INDEX}>
            <Route index element={(<SearchPage />)} />
            {/* <Route path={Urls.FEED.ID} element={(<FeedDatailPage />)} /> */}
          </Route>

          <Route path={Urls.BPM.INDEX}>
            <Route index element={(<BpmTaskPage />)} />
            {/* <Route path={Urls.FEED.ID} element={(<FeedDatailPage />)} /> */}
          </Route>

          <Route path={Urls.ERROR[500]} element={(<ServerErrorPage />)} />
          <Route path="*" element={(<NotFoundPage />)} />
        </Routes>

        {/* popups */}
        {/* bucket */}

      </ErrorBoundaryWrapper>
    </ThemeContext.Provider>
  );
}
