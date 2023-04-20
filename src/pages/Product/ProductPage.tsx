import React from 'react';

import Card from '../../layers/Product';
import withUser from '../../hoc/withUser';
import Content from '../../components/core/Content';

function ProductPage() {
  return (
    <Content heading="Product Page" header menu>
      <Card />
    </Content>
  );
}

export default withUser(ProductPage, false);
