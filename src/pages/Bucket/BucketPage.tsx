import React from 'react';
import Main from './Bucket';
import withUser from '../../hoc/withUser';
import Content from '../../components/Content';

function BucketPage() {
  return (
    <Content heading="Bucket" header menu>
      <Main />
    </Content>
  );
}

export default withUser(BucketPage, false);
