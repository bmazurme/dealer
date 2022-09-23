import React from 'react';

import Main from '../../pages/Main';
import SignUp from '../../pages/SignUp';
import SignIn from '../../pages/SignIn';
import NotFoundPage from '../../pages/NotFound';
import ServerErrorPage from '../../pages/ServerError';

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
