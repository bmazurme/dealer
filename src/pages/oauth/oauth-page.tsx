import React from 'react';

import Oauth from './oauth';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/content';

function OauthPage() {
  return (
    <Content heading="Oauth" header menu>
      <Oauth />
    </Content>
  );
}

export default withUser(OauthPage, false);
