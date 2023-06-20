import React, { useLayoutEffect, useMemo } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import Table from '../../components/table';
import Preloader from '../../components/preloader';

import { useGetBpmTasksMutation } from '../../store/api/bpm-api/endpoints';

export default function BpmTask() {
  const errorHandler = useErrorHandler();
  const [getBpmTasks, { data = { result: [] }, isLoading }] = useGetBpmTasksMutation();
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          { Header: 'Name', accessor: 'name' },
          { Header: 'Created', accessor: 'created' },
          { Header: 'INN', accessor: 'businessKey' },
          { Header: 'Process', accessor: 'processDefinitionNameRu' },
        ],
      },
    ],
    [],
  );

  useLayoutEffect(() => {
    const getData = async () => {
      try {
        await getBpmTasks();
      } catch ({ status, data: { reason } }) {
        errorHandler(new Error(`${status}: ${reason}`));
      }
    };

    getData();
  }, []);

  return (isLoading ? <Preloader /> : <Table columns={columns} data={data?.result} />);
}
