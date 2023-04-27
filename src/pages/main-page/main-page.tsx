import React from 'react';

import Content from '../../components/content';
import Main from '../../layouts/main';

import withUser from '../../hocs/with-user';

function MainPage() {
  return (
    <Content heading="Main" header menu footer banner>
      <Main />
    </Content>
  );
}

export default withUser(MainPage, false);
