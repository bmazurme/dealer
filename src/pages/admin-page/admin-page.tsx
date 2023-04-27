import React from 'react';

import Content from '../../components/content';
import Admin from '../../layouts/admin';

import withUser from '../../hocs/with-user';

function AdminPage() {
  return (
    <Content heading="Admin" header menu footer banner>
      <Admin />
    </Content>
  );
}

export default withUser(AdminPage, false);
