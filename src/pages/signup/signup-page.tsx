import React from 'react';

import SignUp from '../../layers/signup';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/content';

function SignUpPage() {
  return (
    <Content>
      <SignUp />
    </Content>
  );
}

export default withUser(SignUpPage, false);
