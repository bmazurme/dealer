import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import createApi from '../../create-api';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://192.168.151.14:8443/bpm-adapter',
  prepareHeaders: (headers) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    // const token = localStorage.getItem('accessToken');
    //
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }
    // headers.set('Accept', 'application/json, text/plain, */*');
    headers.set('Content-Type', 'application/json');

    return headers;
  },
});

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

const bpmApi = createApi({
  reducerPath: 'bpmApi',
  baseQuery,
  tagTypes: ['bpm'],
  // keepUnusedDataFor: 5 * 60,
  // refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});

export default bpmApi;
