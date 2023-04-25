import React from 'react';

import Admin from '../../layers/admin';
import Content from '../../components/core/content';
import withUser from '../../hocs/with-user';

function AboutPage() {
  return (
    <Content heading="Admin" header menu footer banner>
      <Admin />
    </Content>
  );
}

export default withUser(AboutPage, false);
