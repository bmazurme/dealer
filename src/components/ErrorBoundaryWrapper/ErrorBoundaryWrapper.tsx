/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import type { PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Button from '../Button';
import Footer from '../Footer';
import Banner from '../Banner';

type ErrorBoundaryWrapperProps = PropsWithChildren<unknown>;

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <>
      <Header />

      <div className="error-boundary">
        <div className="error-boundary__title">
          <h2 className="error-boundary__title">APP-ERROR </h2>
          <p className="error-boundary__message">{error.message}</p>

          <div className="error-boundary__block">
            Try to
            <Button className="button button_reload" onClick={resetErrorBoundary} variant="outline">
              Reload app
            </Button>
            or
            <Button className="link link_home" onClick={resetErrorBoundary} variant="outline" as={Link} to="/">
              Go to homepage
            </Button>
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
