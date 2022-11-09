import React from 'react';

import type { PropsWithChildren } from 'react';

import Header from '../Header';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';
import Banner from '../Banner';

type Props = PropsWithChildren<{
  heading?: string;
  className?: string;
}>;

export default function Content({ heading, className, children }: Props) {
  return (
    <>
      <Header />
      <HeaderMenu />
      {heading && (
        <section className="">
          <h1 className="">{heading}</h1>
        </section>
      )}
      <main className="">{children}</main>
      <Footer />
      <Banner />
    </>
  );
}
