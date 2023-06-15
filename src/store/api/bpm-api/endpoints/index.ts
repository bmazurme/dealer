import bpmApi from '..';

const bpmApiEndpoints = bpmApi
  .enhanceEndpoints({
    addTagTypes: ['bpm'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getBpmTasks: builder.mutation<{ result: any } | null, void>({
        query: () => ({
          url: '/requests',
          method: 'POST',
          body: {
            type: 'tasks.getTasks',
            params: {
              candidateGroupList: [
                'ALL_USERS',
                'SPIMEX_CLIENT_SECTION',
                'ADMINISTRATORS',
              ],
            },
          },
        }),
        invalidatesTags: ['bpm'],
      }),
    }),
  });

export const { useGetBpmTasksMutation } = bpmApiEndpoints;
export default bpmApiEndpoints;
