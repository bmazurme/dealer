import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutPage, DeliveryPage, PrivacyPage } from '../../pages/content';
import { SignUpPage, SignInPage, SignConfirmPage } from '../../pages/sign';
import { PasswordResetPage, PasswordUpdatePage, PasswordNewPage } from '../../pages/password';
import { ProductPage, ProductCreatePage, ProductTablePage } from '../../pages/product';
import { NotFoundPage, ServerErrorPage } from '../../pages/error';
import { ProfilePage, ProfileEditPage } from '../../pages/profile';
import { AdminPage } from '../../pages/admin';
import MainPage from '../../pages/MainPage';
import BucketPage from '../../pages/BucketPage';

import ErrorBoundaryWrapper from '../core/ErrorBoundaryWrapper';

import { Urls } from '../../utils/routers';
import '../../index.css';

export default function App() {
  return (
    <ErrorBoundaryWrapper>
      <Routes>
        <Route index element={(<MainPage />)} />
        <Route path={Urls.ADMIN.INDEX} element={(<AdminPage />)} />
        <Route path={Urls.SIGN.UP} element={(<SignUpPage />)} />
        <Route path={Urls.SIGN.IN} element={(<SignInPage />)} />
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
  );
}
