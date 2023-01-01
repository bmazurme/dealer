import React from 'react';

import SignIn from '.';
import withUser from '../../../hoc/withUser';
import { Content } from '../../../components/core';

function SignInPage() {
  return (
    <Content>
      <SignIn />
    </Content>
  );
}

export default withUser(SignInPage, false);
