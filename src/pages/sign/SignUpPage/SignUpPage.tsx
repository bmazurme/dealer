import React from 'react';

import SignUp from '.';
import withUser from '../../../hoc/withUser';
import { Content } from '../../../components/core';

function SignUpPage() {
  return (
    <Content>
      <SignUp />
    </Content>
  );
}

export default withUser(SignUpPage, false);
