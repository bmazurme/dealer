import React from 'react';

import Content from '../../components/content';
import Profile from '../../layouts/profile';

import withUser from '../../hocs/with-user';

function ProfilePage() {
  return (
    <Content heading="Profile" header menu>
      <Profile />
    </Content>
  );
}

export default withUser(ProfilePage, true);
