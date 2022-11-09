import React from 'react';

import MainPage from 'Pages/MainPage';
import AboutPage from 'Pages/AboutPage';
import PrivacyPage from 'Pages/PrivacyPage';
import SignUpPage from 'Pages/SignUpPage';
import SignInPage from 'Pages/SignInPage';
import ProfilePage from 'Pages/ProfilePage';
import NotFoundPage from 'Pages/NotFoundPage';
import ServerErrorPage from 'Pages/ServerErrorPage';

import '../../index.css';

function App() {
  return (
    <div className="container">
      <SignUpPage />
      <SignInPage />
      <ProfilePage />
      <MainPage />
      <AboutPage />
      <PrivacyPage />
      <NotFoundPage />
      <ServerErrorPage />
    </div>
  );
}

export default App;
