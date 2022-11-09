/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import type { PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';

import Header from '../Header';
import HeaderMenu from '../HeaderMenu';
import Button from '../Button';
import Footer from '../Footer';
import Banner from '../Banner';

type ErrorBoundaryWrapperProps = PropsWithChildren<unknown>;

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <>
      <Header />
      <HeaderMenu />
      <div className="">
        <div role="alert" className="">
          <div className="">
            <div className="">
              APPERROR
            </div>
            <div className="">
              <pre className="">{error.message}</pre>
            </div>
            <div className="">
              Try to
              <Button
                className=""
                onClick={resetErrorBoundary}
              >
                Reload app
              </Button>
              or
              <Button
                className=""
                onClick={resetErrorBoundary}
                as={Link}
                to="/"
              >
                Go to homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Banner />
    </>
  );
}

export default function ErrorBoundaryWrapper({
  children,
}: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary
      onReset={() => {}}
      FallbackComponent={ErrorFallback}
    >
      {children}
    </ErrorBoundary>
  );
}
