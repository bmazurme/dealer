import React from 'react';

import Content from '../../components/content';
import OauthSignUp from '../../layouts/oauth-signup';

import withUser from '../../hocs/with-user';

function OauthSignUpPage() {
  return (
    <Content>
      <OauthSignUp />
    </Content>
  );
}

export default withUser(OauthSignUpPage, false);
