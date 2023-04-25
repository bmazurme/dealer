import React from 'react';

import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';
import PasswordUpdate from '../../layers/PasswordUpdate';

function PasswordUpdatePage() {
  return (
    <Content>
      <PasswordUpdate />
    </Content>
  );
}

export default withUser(PasswordUpdatePage, false);
