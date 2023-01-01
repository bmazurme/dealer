import React from 'react';

import CreateCard from './ProductCreate';
import withUser from '../../../hoc/withUser';
import { Content } from '../../../components/core';

function ProductCreatePage() {
  return (
    <Content heading="Product create" header menu>
      <CreateCard />
    </Content>
  );
}

export default withUser(ProductCreatePage, false);
