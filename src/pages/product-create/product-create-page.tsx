import React from 'react';

import CreateCard from '../../layers/ProductCreate';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';

function ProductCreatePage() {
  return (
    <Content heading="Product create" header menu>
      <CreateCard />
    </Content>
  );
}

export default withUser(ProductCreatePage, false);
