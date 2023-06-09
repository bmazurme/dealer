/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import type { PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Header from '../header';
import Button from '../button';
import Footer from '../footer';
import Banner from '../banner';

import style from './error-boundary-wrapper.module.css';

type ErrorBoundaryWrapperProps = PropsWithChildren<unknown>;

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <>
      <Header />
      <div className={style['error-boundary']}>
        <div className={style['error-boundary__title']}>
          <h2 className={style['error-boundary__title']}>APP-ERROR </h2>
          <p className={style['error-boundary__message']}>{error.message}</p>
          <div className={style['error-boundary__block']}>
            Try to
            <Button
              className={classnames('button', 'button_reload')}
              onClick={resetErrorBoundary}
              variant="outline"
            >
              Reload app
            </Button>
            or
            <Button
              className={classnames('link', 'link_home')}
              onClick={resetErrorBoundary}
              variant="outline"
              as={Link}
              to="/"
            >
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

export default function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary onReset={() => {}} FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
