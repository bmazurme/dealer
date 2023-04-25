import React from 'react';

import Profile from '../../layers/profile';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/content';

function ProfilePage() {
  return (
    <Content heading="Profile" header menu>
      <Profile />
    </Content>
  );
}

export default withUser(ProfilePage, true);
