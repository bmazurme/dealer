import React from 'react';
import {
  useTable,
  usePagination,
  useSortBy,
  useFlexLayout,
  type Row,
  type Column,
  // type CellProps,
  type TableInstance,
} from 'react-table';

import Pagination from '../pagination';

import style from './table.module.css';

// Required workaround for missing TypesScript definitions.
// Will be fixed in react-table v8
// see also https://github.com/tannerlinsley/react-table/issues/3064
// eslint-disable-next-line @typescript-eslint/ban-types
type TableTypeWorkaround<T extends Object> = TableInstance<T> & {
  page: Row<T>[];
  pageCount: number;
  pageOptions: number[];
  canPreviousPage: boolean;
  canNextPage: boolean;
  gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
  previousPage: () => void;
  nextPage: () => void;
  setPageSize: (pageSize: number) => void;
  state: {
    pageIndex: number;
    pageSize: number;
  }
};

export default function Table({ columns, data }
: { columns: Column<object>[], data: object[] }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    ...paginationProps
  } = useTable<object>(
    { columns, data },
    useFlexLayout,
    useSortBy,
    usePagination,
  ) as TableTypeWorkaround<object>;

  return (
    <>
      <div className={style.table}>
        <div className="" {...getTableProps()}>
          <div className={style.table__header}>
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <div
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className={style.table__field}>
                      {column.render('Header')}
                      {/* Add a sort direction indicator */}
                      <span>
                        {/* eslint-disable-next-line no-nested-ternary */}
                        {column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={style.table__rows} {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <div className={style.table__row} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <div className={style.table__column} {...cell.getCellProps()}>
                      <div className={style.table__cell}>
                        {cell.render('Cell')}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Pagination {...paginationProps} />
    </>
  );
}
