import React from 'react';

import withUser from '../../hocs/with-user';
import Content from '../../components/core/content';
import PasswordUpdate from '../../layers/password-update';

function PasswordUpdatePage() {
  return (
    <Content>
      <PasswordUpdate />
    </Content>
  );
}

export default withUser(PasswordUpdatePage, false);
