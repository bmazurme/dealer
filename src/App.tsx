import React, { useLayoutEffect, useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminPage from './pages/admin-page';
import MainPage from './pages/main-page';

import OauthPage from './pages/oauth-signin-page';
import OauthSignUpPage from './layouts/oauth-signup';

import PasswordNewPage from './pages/password-new-page';
import PasswordResetPage from './pages/password-reset-page';
import PasswordUpdatePage from './pages/password-update-page';

import ProductTablePage from './pages/product-table-page';
import ProfilePage from './pages/profile-page';
import ProfileEditPage from './pages/profile-edit';

import SignConfirmPage from './pages/sign-confirm-page';
import SignInPage from './pages/signin-page';
import SignUpPage from './pages/signup-page';

import ServerErrorPage from './pages/server-error-page';
import NotFoundPage from './pages/not-found-page';

import ErrorBoundaryWrapper from './components/error-boundary-wrapper';

import ThemeContext from './context/theme-context';

import { Urls } from './utils/routers';

import './index.css';

export default function App() {
  const [style, setStyle] = useState(localStorage.getItem('wp-theme') === 'dark' ? 'dark' : 'light');
  const providerValue = useMemo(() => ({ style, setStyle }), [style, setStyle]);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', (style === 'dark') ? 'dark' : 'light');
    localStorage.setItem('wp-theme', (style === 'dark') ? 'dark' : 'light');
  }, [style]);

  return (
    <ThemeContext.Provider value={providerValue}>
      <ErrorBoundaryWrapper>
        <Routes>
          <Route index element={(<MainPage />)} />
          <Route path={Urls.ADMIN.INDEX} element={(<AdminPage />)} />

          <Route path={Urls.SIGN.UP} element={(<SignUpPage />)} />
          <Route path={Urls.SIGN.IN} element={(<SignInPage />)} />
          <Route path={Urls.SIGN.CONFIRM} element={(<SignConfirmPage />)} />
          <Route path={Urls.SIGN.OAUTH} element={(<OauthPage />)} />
          <Route path={Urls.SIGN.OSIGNUP} element={(<OauthSignUpPage />)} />

          <Route path={Urls.PASSWORD.RESET} element={(<PasswordResetPage />)} />
          <Route path={Urls.PASSWORD.NEW} element={(<PasswordNewPage />)} />
          <Route path={Urls.PASSWORD.UPDATE} element={(<PasswordUpdatePage />)} />

          <Route path={Urls.PROFILE.INDEX} element={(<ProfilePage />)} />
          <Route path={Urls.PROFILE.EDIT} element={(<ProfileEditPage />)} />

          <Route path={Urls.MAIN.PRODUCT.LIST} element={(<ProductTablePage />)} />

          <Route path={Urls.ERROR[500]} element={(<ServerErrorPage />)} />
          <Route path="*" element={(<NotFoundPage />)} />
        </Routes>
      </ErrorBoundaryWrapper>
    </ThemeContext.Provider>
  );
}
