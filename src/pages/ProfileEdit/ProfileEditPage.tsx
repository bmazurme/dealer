import React from 'react';

import EditProfile from '../../layers/ProfileEdit';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';

function ProfileEditPage() {
  return (
    <Content heading="Profile Edit" header menu>
      <EditProfile />
    </Content>
  );
}

export default withUser(ProfileEditPage, true);
