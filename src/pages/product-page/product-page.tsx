import React from 'react';

import Content from '../../components/content';
import Board from '../../layers/product';

import withUser from '../../hocs/with-user';

function CurrentPage() {
  return (
    <Content heading="Products" header menu footer banner>
      <Board />
    </Content>
  );
}

export default withUser(CurrentPage, false);
