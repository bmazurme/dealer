import React from 'react';

import Content from '../../components/content';
import BpmTask from '../../layers/bpm-task';

import withUser from '../../hocs/with-user';

function BpmTaskPage() {
  return (
    <Content heading="Bpm task" header menu>
      <BpmTask />
    </Content>
  );
}

export default withUser(BpmTaskPage, false);
