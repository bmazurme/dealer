import React from 'react';
import EditProfile from './ProfileEdit';
import withUser from '../../hoc/withUser';
import Content from '../../components/Content';

function ProfileEditPage() {
  return (
    <Content heading="Profile Edit" header menu>
      <EditProfile />
    </Content>
  );
}

export default withUser(ProfileEditPage, false);
