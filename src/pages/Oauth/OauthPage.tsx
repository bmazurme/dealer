import React from 'react';

import Oauth from './Oauth';
import withUser from '../../hoc/withUser';
import Content from '../../components/core/Content';

function OauthPage() {
  return (
    <Content heading="Oauth" header menu>
      <Oauth />
    </Content>
  );
}

export default withUser(OauthPage, false);
