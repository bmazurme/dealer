import createApi from '../../create-api';

import { getBaseQuery } from '../../base-query';

import { BASE_URL } from '../../../utils/constants';

const baseQuery = getBaseQuery(BASE_URL);

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['auth'],
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});

export default authApi;
