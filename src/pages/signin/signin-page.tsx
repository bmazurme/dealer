import React from 'react';

import SignIn from '../../layers/signin/signin';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';

function SignInPage() {
  return (
    <Content>
      <SignIn />
    </Content>
  );
}

export default withUser(SignInPage, false);
