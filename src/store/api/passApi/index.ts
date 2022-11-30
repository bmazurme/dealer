import createApi from '../../createApi';

import { getBaseQuery } from '../../baseQuery';

const baseQuery = getBaseQuery('http://localhost:3000/api');

const passApi = createApi({
  reducerPath: 'passApi',
  baseQuery,
  tagTypes: ['User'],
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});

export default passApi;
