import React from 'react';
import withUser from '../../hoc/withUser';
import Content from '../../components/Content';
import SignConfirm from './SignConfirm';

function SignConfirmPage() {
  return (
    <Content>
      <SignConfirm />
    </Content>
  );
}

export default withUser(SignConfirmPage, false);
