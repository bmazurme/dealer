import React from 'react';

import Admin from './Admin';
import withUser from '../../../hoc/withUser';
import Content from '../../../components/core/Content';

function AboutPage() {
  return (
    <Content heading="Admin" header menu>
      <Admin />
    </Content>
  );
}

export default withUser(AboutPage, false);
