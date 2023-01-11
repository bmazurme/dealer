import React from 'react';

import OauthSignUp from './OauthSignUp';
import withUser from '../../hoc/withUser';
import Content from '../../components/core/Content';

function OauthSignUpPage() {
  return (
    <Content>
      <OauthSignUp />
    </Content>
  );
}

export default withUser(OauthSignUpPage, false);
