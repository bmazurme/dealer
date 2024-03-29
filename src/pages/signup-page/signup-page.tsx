import React from 'react';

import Content from '../../components/content';
import SignUp from '../../layers/signup';

import withUser from '../../hocs/with-user';

function SignUpPage() {
  return (
    <Content>
      <SignUp />
    </Content>
  );
}

export default withUser(SignUpPage, false);
