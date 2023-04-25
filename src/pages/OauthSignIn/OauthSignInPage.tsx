import React from 'react';

import OauthSignIn from '../../layers/OauthSignIn';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';

function OauthPage() {
  return (
    <Content heading="OauthSignIn">
      <OauthSignIn />
    </Content>
  );
}

export default withUser(OauthPage, false);
