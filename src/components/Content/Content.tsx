import React from 'react';

import type { PropsWithChildren } from 'react';

import Header from '../Header';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';
import Banner from '../Banner';

type Props = PropsWithChildren<{
  heading?: string;
  header?: boolean;
  menu?: boolean;
}>;

export default function Content({ heading, children, header, menu }: Props) {
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

      <Footer />
      <Banner />
    </>
  );
}
