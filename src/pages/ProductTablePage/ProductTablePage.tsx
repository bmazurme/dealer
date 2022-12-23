import React from 'react';
import Card from './ProductTable';
import withUser from '../../hoc/withUser';
import Content from '../../components/Content';

function ProductTablePage() {
  return (
    <Content heading="Products Page" header menu>
      <Card />
    </Content>
  );
}

export default withUser(ProductTablePage, false);
