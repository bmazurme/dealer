import React from 'react';

import Content from '../../components/core/content';
import Profile from '../../layers/profile';

import withUser from '../../hocs/with-user';

function ProfilePage() {
  return (
    <Content heading="Profile" header menu>
      <Profile />
    </Content>
  );
}

export default withUser(ProfilePage, true);
