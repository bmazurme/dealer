import React from 'react';

import Content from '../../components/content';
import OauthSignIn from '../../layouts/oauth-signIn';

import withUser from '../../hocs/with-user';

function OauthPage() {
  return (
    <Content heading="OauthSignIn">
      <OauthSignIn />
    </Content>
  );
}

export default withUser(OauthPage, false);
