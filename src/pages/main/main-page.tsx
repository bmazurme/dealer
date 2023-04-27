import React from 'react';

import Content from '../../components/core/content';
import Main from '../../layers/main';

import withUser from '../../hocs/with-user';

function MainPage() {
  return (
    <Content heading="Main" header menu footer banner>
      <Main />
    </Content>
  );
}

export default withUser(MainPage, false);
