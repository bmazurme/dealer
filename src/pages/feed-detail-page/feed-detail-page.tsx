import React from 'react';

import Content from '../../components/content';

import withUser from '../../hocs/with-user';

function FeedDetailPage() {
  return (
    <Content heading="Feed detail" header menu>
      detail
    </Content>
  );
}

export default withUser(FeedDetailPage, false);
