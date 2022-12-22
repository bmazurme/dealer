import React from 'react';

// import type { TableState } from 'react-table';
//
//
// type PaginationProps = {
//   setPageSize: (value: number) => void;
//   pageCount: number;
//   pageOptions: number[];
//   gotoPage: (page: number) => void;
//   canPreviousPage: boolean;
//   canNextPage: boolean;
//   previousPage: () => void;
//   nextPage: () => void;
//   state: TableState<User> & { pageIndex: number; pageSize: number; }
// };

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
}: any) {
  return (
    <>
    </>
  );
}
