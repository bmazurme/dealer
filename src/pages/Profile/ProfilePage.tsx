import React from 'react';

import Profile from '../../layers/Profile';
import withUser from '../../hoc/withUser';
import Content from '../../components/core/Content';

function ProfilePage() {
  return (
    <Content heading="Profile" header menu>
      <Profile />
    </Content>
  );
}

export default withUser(ProfilePage, true);
