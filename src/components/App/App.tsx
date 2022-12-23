import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutPage from '../../pages/AboutPage';
import AdminPage from '../../pages/AdminPage';

import DeliveryPage from '../../pages/AboutDelivery';
import PrivacyPage from '../../pages/PrivacyPage';
import SignUpPage from '../../pages/SignUpPage';
import SignInPage from '../../pages/SignInPage';
import SignConfirmPage from '../../pages/SignConfirmPage';
import PasswordResetPage from '../../pages/PasswordResetPage';
import PasswordUpdatePage from '../../pages/PasswordUpdate';
import PasswordNewPage from '../../pages/PasswordNewPage';
import ProfilePage from '../../pages/ProfilePage';
import EditProfilePage from '../../pages/ProfileEditPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ServerErrorPage from '../../pages/ServerErrorPage';
import MainPage from '../../pages/MainPage';
import BucketPage from '../../pages/Bucket';
import ProductPage from '../../pages/ProductPage';
import ProductTablePage from '../../pages/ProductTablePage';
import CreateCard from '../../pages/ProductCreatePage';

import ErrorBoundaryWrapper from '../ErrorBoundaryWrapper';

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
        <Route path={Urls.PROFILE.EDIT} element={(<EditProfilePage />)} />
        <Route path={Urls.MAIN.PRODUCT.INDEX} element={(<ProductPage />)} />
        <Route path={Urls.MAIN.PRODUCT.LIST} element={(<ProductTablePage />)} />
        <Route path={Urls.MAIN.PRODUCT.CREATE} element={(<CreateCard />)} />

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
