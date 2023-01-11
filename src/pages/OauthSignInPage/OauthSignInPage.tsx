import React from 'react';

import OauthSignIn from './OauthSignIn';
import withUser from '../../hoc/withUser';
import Content from '../../components/core/Content';

function OauthPage() {
  return (
    <Content heading="OauthSignIn">
      <OauthSignIn />
    </Content>
  );
}

export default withUser(OauthPage, false);
