import React from 'react';

import SignUp from './SignUp';
import withUser from '../../../hoc/withUser';
import Content from '../../../components/core/Content';

function SignUpPage() {
  return (
    <Content>
      <SignUp />
    </Content>
  );
}

export default withUser(SignUpPage, false);
