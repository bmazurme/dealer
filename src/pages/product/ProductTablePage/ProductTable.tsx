/* eslint-disable react/no-unescaped-entities */
import React, { useMemo } from 'react';

import Table from '../../../components/Table';

export default function ProductTable() {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  );

  const tableData: Record<string, string | number>[] = [
    {
      firstName: 'asmoke',
      lastName: 'literature',
      age: 0,
      visits: 6,
      progress: 23,
      status: 'relationship',
      // subRows: undefined,
    },
    {
      firstName: 'smoke',
      lastName: 'literature',
      age: 0,
      visits: 6,
      progress: 12,
      status: 'relationship',
      // subRows: undefined,
    },
  ];
  return (
    <section className="page">
      <div className="page__content">
        <Table columns={columns} data={tableData} />
      </div>
    </section>
  );
}
