import React from 'react';

import Delivery from '../../layers/Delivery';
import withUser from '../../hocs/with-user';
import Content from '../../components/core/Content';

function DeliveryPage() {
  return (
    <Content heading="Delivery" header menu>
      <Delivery />
    </Content>
  );
}

export default withUser(DeliveryPage, false);
