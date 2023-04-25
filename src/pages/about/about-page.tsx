import React from 'react';

import About from '../../layers/about';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';

function AboutPage() {
  return (
    <Content heading="About" header menu>
      <About />
    </Content>
  );
}

export default withUser(AboutPage, false);
