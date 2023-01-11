import React from 'react';

import withUser from '../../../hoc/withUser';
import Content from '../../../components/core/Content';
import PasswordUpdate from './PasswordUpdate';

function PasswordUpdatePage() {
  return (
    <Content>
      <PasswordUpdate />
    </Content>
  );
}

export default withUser(PasswordUpdatePage, false);
