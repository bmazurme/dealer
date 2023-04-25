import React from 'react';

import OauthSignUp from '../../layers/oauth-signup';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/content';

function OauthSignUpPage() {
  return (
    <Content>
      <OauthSignUp />
    </Content>
  );
}

export default withUser(OauthSignUpPage, false);
