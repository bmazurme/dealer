import React from 'react';

import withUser from '../../../hoc/withUser';
import { Content } from '../../../components/core';
import SignConfirm from '.';

function SignConfirmPage() {
  return (
    <Content>
      <SignConfirm />
    </Content>
  );
}

export default withUser(SignConfirmPage, false);
