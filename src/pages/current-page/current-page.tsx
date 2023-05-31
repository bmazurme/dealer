import React from 'react';

import Content from '../../components/content';
import Current from '../../layers/current';

import withUser from '../../hocs/with-user';

function CurrentPage() {
  return (
    <Content heading="Current" header menu footer banner>
      <Current />
    </Content>
  );
}

export default withUser(CurrentPage, false);
