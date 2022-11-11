import React from 'react';
import Profile from './Profile';
import withUser from '../../hoc/withUser';
import Content from '../../components/Content';

function ProfilePage() {
  return (
    <Content heading="Profile" header menu>
      <Profile />
    </Content>
  );
}

export default withUser(ProfilePage, false);
