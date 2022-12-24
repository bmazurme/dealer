import React from 'react';

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';

import type { TableState } from 'react-table';

import { Button, Select } from '../formui';

type PaginationProps = {
  setPageSize: (value: number) => void;
  pageCount: number;
  pageOptions: number[];
  gotoPage: (page: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  state: TableState<object[]> & { pageIndex: number; pageSize: number; }
};

export default function Pagination({
  setPageSize,
  pageCount,
  pageOptions,
  gotoPage,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  state: { pageIndex, pageSize },
}: PaginationProps) {
  return (
    <div className="py-3 flex items-center justify-between sticky top-full">
      <div className="flex-1 flex justify-between sm:hidden">
        <Button variant="icon" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
        <Button variant="icon" onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
      </div>
      <div className="hidden sm:flex sm:items-center w-full">
        <div className="flex w-full gap-x-2 justify-between items-center">
          <div className="w-[150px]">
            <Select
              value={pageSize}
              classes={{
                list: 'bottom-full',
              }}
              options={[
                { label: 'Show 10 items', value: 10 },
                { label: 'Show 25 items', value: 25 },
                { label: 'Show 50 items', value: 50 },
              ]}
              onChange={(value) => setPageSize(Number(value))}
            />
          </div>
          <span className="text-sm text-gray-700">
            {`Page ${pageIndex + 1} of ${pageOptions.length}`}
          </span>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <Button
              variant="icon"
              className="rounded-l-md"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <span className="sr-only">First</span>
              <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Button>
            <Button
              variant="icon"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Button>
            <Button
              variant="icon"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Button>
            <Button
              variant="icon"
              className="rounded-r-md"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <span className="sr-only">Last</span>
              <ChevronDoubleRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
