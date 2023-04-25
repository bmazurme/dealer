import React from 'react';

import Main from '../../layers/main/main';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';

function MainPage() {
  return (
    <Content heading="Main" header menu footer banner>
      <Main />
    </Content>
  );
}

export default withUser(MainPage, false);
