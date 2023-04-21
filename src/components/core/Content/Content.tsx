import React from 'react';
import type { PropsWithChildren } from 'react';

import HeaderMenu from '../../page-components/HeaderMenu';
import { Header, Footer, Banner } from '../../page-components';

type Props = PropsWithChildren<{
  heading?: string;
  header?: boolean;
  menu?: boolean;
  footer?: boolean;
  banner?: boolean;
}>;

export default function Content({
  heading, children, header, menu, footer, banner,
}: Props) {
  return (
    <>
      {header && <Header />}
      {menu && <HeaderMenu />}

      <main className="content">
        {heading && (
          <h2 className="content__title">{heading}</h2>
        )}
        {children}
      </main>

      {footer && <Footer />}
      {banner && <Banner />}
    </>
  );
}
