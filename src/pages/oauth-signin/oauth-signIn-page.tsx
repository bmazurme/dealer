import React from 'react';

import OauthSignIn from '../../layers/oauth-signIn';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/content';

function OauthPage() {
  return (
    <Content heading="OauthSignIn">
      <OauthSignIn />
    </Content>
  );
}

export default withUser(OauthPage, false);
