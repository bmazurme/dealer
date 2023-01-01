import React from 'react';

import Bucket from './Bucket';
import withUser from '../../hoc/withUser';
import { Content } from '../../components/core';

function BucketPage() {
  return (
    <Content heading="Bucket" header menu>
      <Bucket />
    </Content>
  );
}

export default withUser(BucketPage, false);
