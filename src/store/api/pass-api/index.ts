import createApi from '../../create-api';

import { getBaseQuery } from '../../base-query';

import { BASE_URL } from '../../../utils/constants';

const baseQuery = getBaseQuery(BASE_URL);

const passApi = createApi({
  reducerPath: 'passApi',
  baseQuery,
  tagTypes: ['User'],
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});

export default passApi;
