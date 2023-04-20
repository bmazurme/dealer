import React from 'react';

import SignIn from '../../layers/SignIn/SignIn';
import withUser from '../../hoc/withUser';
import Content from '../../components/core/Content';

function SignInPage() {
  return (
    <Content>
      <SignIn />
    </Content>
  );
}

export default withUser(SignInPage, false);
