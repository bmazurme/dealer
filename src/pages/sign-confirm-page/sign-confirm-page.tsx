import React from 'react';

import Content from '../../components/content';
import SignConfirm from '../../layers/sign-confirm';

import withUser from '../../hocs/with-user';

function SignConfirmPage() {
  return (
    <Content>
      <SignConfirm />
    </Content>
  );
}

export default withUser(SignConfirmPage, false);
