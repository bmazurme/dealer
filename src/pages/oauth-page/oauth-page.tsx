import React from 'react';

import Content from '../../components/content';
import Oauth from '../../layers/oauth';

import withUser from '../../hocs/with-user';

function OauthPage() {
  return (
    <Content heading="Oauth" header menu>
      <Oauth />
    </Content>
  );
}

export default withUser(OauthPage, false);
