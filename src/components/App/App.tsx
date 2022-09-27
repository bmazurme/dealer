import React from 'react';

import Main from '../../pages/Main';
import SignUp from '../../pages/SignUp';
import SignIn from '../../pages/SignIn';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ServerErrorPage from '../../pages/ServerError';

import '../../index.css';

function App() {
  return (
    <div className="container">
      <SignUp />
      <SignIn />
      <Main />
      <NotFoundPage />
      <ServerErrorPage />
    </div>
  );
}

export default App;
