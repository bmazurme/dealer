import React from 'react';

import Bucket from '../../layers/Bucket';
import withUser from '../../hocs/with-user';
import { Content } from '../../components/core';

function BucketPage() {
  return (
    <Content heading="Bucket" header menu>
      <Bucket />
    </Content>
  );
}

export default withUser(BucketPage, false);
