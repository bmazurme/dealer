import React from 'react';

import Admin from '../../layers/Admin';
import withUser from '../../hoc/withUser';
import Content from '../../components/core/Content';

function AboutPage() {
  return (
    <Content heading="Admin" header menu footer banner>
      <Admin />
    </Content>
  );
}

export default withUser(AboutPage, false);
