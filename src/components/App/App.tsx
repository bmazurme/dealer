import React from 'react';
import {
  Route,
  Routes,
  // useNavigate,
  // useLocation,
} from 'react-router-dom';

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
      <Routes>
        <Route path="/signup" element={(<SignUpPage />)} />
        <Route path="/signin" element={(<SignInPage />)} />
        <Route path="/profile" element={(<ProfilePage />)} />
        <Route path="/main" element={(<MainPage />)} />
        <Route path="/about" element={(<AboutPage />)} />
        <Route path="/privacy" element={(<PrivacyPage />)} />
        <Route path="/not-found-page" element={(<NotFoundPage />)} />
        <Route path="/server-error-page" element={(<ServerErrorPage />)} />
      </Routes>
    </div>
  );
}

export default App;
