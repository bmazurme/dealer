import React, { useLayoutEffect, useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/about';
import AdminPage from './pages/admin';
import BucketPage from './pages/bucket';
import DeliveryPage from './pages/Delivery';
import MainPage from './pages/main';
import OauthPage from './pages/oauth-signin';
import OauthSignUpPage from './layers/oauth-signup';
import PasswordNewPage from './pages/password-new';
import PasswordResetPage from './pages/password-reset';
import PasswordUpdatePage from './pages/password-update';
import PrivacyPage from './pages/privacy';
import ProductPage from './pages/product';
import ProductCreatePage from './pages/product-create';
import ProductTablePage from './pages/product-table';
import ProfilePage from './pages/profile';
import ProfileEditPage from './pages/profile-edit';
import SignConfirmPage from './pages/sign-confirm';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import { NotFoundPage, ServerErrorPage } from './pages/error';

import ErrorBoundaryWrapper from './components/core/ErrorBoundaryWrapper';

import ThemeContext from './context/ThemeContext';

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
          <Route path={Urls.SIGN.OAUTH} element={(<OauthPage />)} />
          <Route path={Urls.SIGN.OSIGNUP} element={(<OauthSignUpPage />)} />
          <Route path={Urls.SIGN.CONFIRM} element={(<SignConfirmPage />)} />
          <Route path={Urls.PASSWORD.RESET} element={(<PasswordResetPage />)} />
          <Route path={Urls.PASSWORD.NEW} element={(<PasswordNewPage />)} />
          <Route path={Urls.PASSWORD.UPDATE} element={(<PasswordUpdatePage />)} />
          <Route path={Urls.PROFILE.INDEX} element={(<ProfilePage />)} />
          <Route path={Urls.PROFILE.EDIT} element={(<ProfileEditPage />)} />
          <Route path={Urls.MAIN.PRODUCT.INDEX} element={(<ProductPage />)} />
          <Route path={Urls.MAIN.PRODUCT.LIST} element={(<ProductTablePage />)} />
          <Route path={Urls.MAIN.PRODUCT.CREATE} element={(<ProductCreatePage />)} />
          <Route path={Urls.MAIN.ABOUT} element={(<AboutPage />)} />
          <Route path={Urls.MAIN.DELIVERY} element={(<DeliveryPage />)} />
          <Route path={Urls.BUCKET.INDEX} element={(<BucketPage />)} />
          <Route path={Urls.MAIN.PRIVACY} element={(<PrivacyPage />)} />
          <Route path={Urls.ERROR[500]} element={(<ServerErrorPage />)} />
          <Route path="*" element={(<NotFoundPage />)} />
        </Routes>
      </ErrorBoundaryWrapper>
    </ThemeContext.Provider>
  );
}
