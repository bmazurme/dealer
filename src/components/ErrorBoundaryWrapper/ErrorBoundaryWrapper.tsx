/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import type { PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Button from '../Button';
import Content from '../Content';

type ErrorBoundaryWrapperProps = PropsWithChildren<unknown>;

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <>
      <Header />
      <Content className="">
        <div className="grow h-full w-max flex items-center mx-auto">
          <div role="alert" className="m-auto bg-gray-100 content-center p-8 rounded-3xl">
            <div className="scene x3">
              <div className="tiles">
                {'APPERROR'.split('')
                  .map((char, index) => ({ char, id: `${char}-${index}` }))
                  .map(({ char, id }, index) => (
                    <div key={id} className={`square s${index} bg-red-600`}>{char}</div>
                  ))}
              </div>
              <div className="w-full flex justify-between max-w-[410px]">
                <pre className="my-4 text-left whitespace-normal">{error.message}</pre>
              </div>
              <div className="border-t pt-6">
                Try to
                <Button
                  className="mx-3"
                  onClick={resetErrorBoundary}
                >
                  Reload app
                </Button>
                or
                <Button
                  className="mx-3"
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
      </Content>
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
