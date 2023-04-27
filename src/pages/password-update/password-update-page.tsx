import React from 'react';

import Content from '../../components/core/content';
import PasswordUpdate from '../../layers/password-update';

import withUser from '../../hocs/with-user';

function PasswordUpdatePage() {
  return (
    <Content>
      <PasswordUpdate />
    </Content>
  );
}

export default withUser(PasswordUpdatePage, false);
