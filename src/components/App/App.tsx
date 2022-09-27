import React from 'react';

import Main from 'Pages/Main';
import SignUp from 'Pages/SignUp';
import SignIn from 'Pages/SignIn';
import Profile from 'Pages/Profile';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';
import ServerErrorPage from 'Pages/ServerError';

import '../../index.css';

function App() {
  return (
    <div className="container">
      <SignUp />
      <SignIn />
      <Profile />
      <Main />
      <NotFoundPage />
      <ServerErrorPage />
    </div>
  );
}

export default App;
