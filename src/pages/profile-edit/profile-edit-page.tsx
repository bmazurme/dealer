import React from 'react';

import Content from '../../components/core/content';
import EditProfile from '../../layers/profile-edit';

import withUser from '../../hocs/with-user';

function ProfileEditPage() {
  return (
    <Content heading="Profile Edit" header menu>
      <EditProfile />
    </Content>
  );
}

export default withUser(ProfileEditPage, true);
