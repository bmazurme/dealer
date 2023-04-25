import React from 'react';

import Card from '../../layers/product';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';

function ProductPage() {
  return (
    <Content heading="Product Page" header menu>
      <Card />
    </Content>
  );
}

export default withUser(ProductPage, false);
