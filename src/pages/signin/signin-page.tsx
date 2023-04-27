import React from 'react';

import Content from '../../components/core/content';
import SignIn from '../../layers/signin';

import withUser from '../../hocs/with-user';

function SignInPage() {
  return (
    <Content>
      <SignIn />
    </Content>
  );
}

export default withUser(SignInPage, false);
