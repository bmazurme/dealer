import React from 'react';

import Delivery from './Delivery';
import withUser from '../../../hoc/withUser';
import { Content } from '../../../components/core';

function DeliveryPage() {
  return (
    <Content heading="Delivery" header menu>
      <Delivery />
    </Content>
  );
}

export default withUser(DeliveryPage, false);
