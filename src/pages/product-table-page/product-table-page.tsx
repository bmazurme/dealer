import React from 'react';

import Content from '../../components/content';
import Card from '../../layers/product-table';

import withUser from '../../hocs/with-user';

function ProductTablePage() {
  return (
    <Content heading="Products Page" header menu>
      <Card />
    </Content>
  );
}

export default withUser(ProductTablePage, false);
