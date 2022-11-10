import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutPage from '../../pages/AboutPage';
import PrivacyPage from '../../pages/PrivacyPage';
import SignUpPage from '../../pages/SignUpPage';
import SignInPage from '../../pages/SignInPage';
import SignConfirmPage from '../../pages/SignConfirmPage';
import ResetPassword from '../../pages/ResetPassword';
import ProfilePage from '../../pages/ProfilePage';
import EditProfile from '../../pages/ProfileEditPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ServerErrorPage from '../../pages/ServerErrorPage';
import MainPage from '../../pages/MainPage';

import ErrorBoundaryWrapper from '../ErrorBoundaryWrapper';

import { Urls } from '../../utils/routers';
import '../../index.css';

function App() {
  return (
    <ErrorBoundaryWrapper>
      <Routes>
        <Route index element={(<MainPage />)} />
        <Route path={Urls.SIGN.UP} element={(<SignUpPage />)} />
        <Route path={Urls.SIGN.IN} element={(<SignInPage />)} />
        <Route path={Urls.SIGN.CONFIRM} element={(<SignConfirmPage />)} />
        <Route path={Urls.PASSWORD.RESET} element={(<ResetPassword />)} />
        <Route path={Urls.PROFILE.INDEX} element={(<ProfilePage />)} />
        <Route path={Urls.PROFILE.EDIT} element={(<EditProfile />)} />
        <Route path={Urls.MAIN.ABOUT} element={(<AboutPage />)} />
        <Route path={Urls.MAIN.PRIVACY} element={(<PrivacyPage />)} />
        <Route path={Urls.ERROR[500]} element={(<ServerErrorPage />)} />
        <Route path="*" element={(<NotFoundPage />)} />
      </Routes>
    </ErrorBoundaryWrapper>
  );
}

export default App;
