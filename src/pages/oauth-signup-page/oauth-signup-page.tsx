import React from 'react';

import Content from '../../components/content';
import OauthSignUp from '../../layers/oauth-signup';

import withUser from '../../hocs/with-user';

function OauthSignUpPage() {
  return (
    <Content>
      <OauthSignUp />
    </Content>
  );
}

export default withUser(OauthSignUpPage, false);
