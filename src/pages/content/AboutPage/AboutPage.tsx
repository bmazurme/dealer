import React from 'react';

import About from './About';
import withUser from '../../../hoc/withUser';
import Content from '../../../components/core/Content';

function AboutPage() {
  // return (<>{Error()}</>);
  return (
    <Content heading="About" header menu>
      <About />
    </Content>
  );
}

export default withUser(AboutPage, false);
