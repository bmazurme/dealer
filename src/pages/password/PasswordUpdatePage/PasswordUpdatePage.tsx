import React from 'react';

import withUser from '../../../hoc/withUser';
import { Content } from '../../../components/core';
import PasswordUpdate from './PasswordUpdate';

function PasswordResetPage() {
  return (
    <Content>
      <PasswordUpdate />
    </Content>
  );
}

export default withUser(PasswordResetPage, false);
