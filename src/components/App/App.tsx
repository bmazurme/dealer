import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from 'Pages/MainPage';
import AboutPage from 'Pages/AboutPage';
import PrivacyPage from 'Pages/PrivacyPage';
import SignUpPage from 'Pages/SignUpPage';
import SignInPage from 'Pages/SignInPage';
import SignConfirmPage from 'Pages/SignConfirmPage';
import ResetPassword from 'Pages/ResetPassword';
import ProfilePage from 'Pages/ProfilePage';
import EditProfile from 'Pages/EditProfilePage';
import NotFoundPage from 'Pages/NotFoundPage';
import ServerErrorPage from 'Pages/ServerErrorPage';
import ErrorBoundaryWrapper from '../ErrorBoundaryWrapper';

import { Urls } from '../../utils/routers';
import '../../index.css';

function App() {
  return (
    <div className="container">
      <ErrorBoundaryWrapper>
        <Routes>
          <Route path={Urls.SIGN.UP} element={(<SignUpPage />)} />
          <Route path={Urls.SIGN.IN} element={(<SignInPage />)} />
          <Route path={Urls.SIGN.CONFIRM} element={(<SignConfirmPage />)} />
          <Route path={Urls.PASSWORD.RESET} element={(<ResetPassword />)} />
          <Route path={Urls.PROFILE.INDEX} element={(<ProfilePage />)} />
          <Route path={Urls.PROFILE.EDIT} element={(<EditProfile />)} />
          <Route path={Urls.MAIN.INDEX} element={(<MainPage />)} />
          <Route path={Urls.MAIN.ABOUT} element={(<AboutPage />)} />
          <Route path={Urls.MAIN.PRIVACY} element={(<PrivacyPage />)} />
          <Route path={Urls.ERROR[404]} element={(<NotFoundPage />)} />
          <Route path={Urls.ERROR[500]} element={(<ServerErrorPage />)} />
        </Routes>
      </ErrorBoundaryWrapper>
    </div>
  );
}

export default App;
