import React from 'react';

import Content from '../../components/content';
import Table from '../../layers/product-table';

import withUser from '../../hocs/with-user';

function FeedPage() {
  return (
    <Content heading="Feed" header menu>
      <Table />
    </Content>
  );
}

export default withUser(FeedPage, false);
