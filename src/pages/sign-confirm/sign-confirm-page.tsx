import React from 'react';

import withUser from '../../hocs/with-user';
import Content from '../../components/core/content';
import SignConfirm from '../../layers/sign-confirm';

function SignConfirmPage() {
  return (
    <Content>
      <SignConfirm />
    </Content>
  );
}

export default withUser(SignConfirmPage, false);
