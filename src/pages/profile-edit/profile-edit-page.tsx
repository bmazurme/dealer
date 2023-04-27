import React from 'react';

import Content from '../../components/content';
import EditProfile from '../../layouts/profile-edit';

import withUser from '../../hocs/with-user';

function ProfileEditPage() {
  return (
    <Content heading="Profile Edit" header menu>
      <EditProfile />
    </Content>
  );
}

export default withUser(ProfileEditPage, true);
