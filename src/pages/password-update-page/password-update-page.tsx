import React from 'react';

import Content from '../../components/content';
import PasswordUpdate from '../../layouts/password-update';

import withUser from '../../hocs/with-user';

function PasswordUpdatePage() {
  return (
    <Content>
      <PasswordUpdate />
    </Content>
  );
}

export default withUser(PasswordUpdatePage, false);
