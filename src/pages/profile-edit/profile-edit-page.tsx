import React from 'react';

import EditProfile from '../../layers/profile-edit';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/content';

function ProfileEditPage() {
  return (
    <Content heading="Profile Edit" header menu>
      <EditProfile />
    </Content>
  );
}

export default withUser(ProfileEditPage, true);
