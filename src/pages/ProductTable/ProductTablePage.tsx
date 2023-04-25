import React from 'react';

import Card from '../../layers/ProductTable';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';

function ProductTablePage() {
  return (
    <Content heading="Products Page" header menu>
      <Card />
    </Content>
  );
}

export default withUser(ProductTablePage, false);
