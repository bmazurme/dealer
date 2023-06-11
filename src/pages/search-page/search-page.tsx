import React from 'react';

import Content from '../../components/content';
import Search from '../../layers/search';

import withUser from '../../hocs/with-user';

function SearchPage() {
  return (
    <Content heading="Global search" header menu>
      <Search />
    </Content>
  );
}

export default withUser(SearchPage, false);
