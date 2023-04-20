import React from 'react';

import Main from '../../layers/Main/Main';
import withUser from '../../hoc/withUser';
import Content from '../../components/core/Content';

function MainPage() {
  return (
    <Content heading="Main" header menu>
      <Main />
    </Content>
  );
}

export default withUser(MainPage, false);
