import usersApi from '..';

const usersApiEndpoints = usersApi
  .enhanceEndpoints({
    addTagTypes: ['user'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUsersInfo: builder.query({
        query: (id) => ({
          url: `/user/${id}`,
          method: 'GET',
        }),
        providesTags: ['user'],
      }),
      updateUser: builder.mutation({
        query: (user) => ({
          url: '/users/update',
          method: 'PATCH',
          data: user,
        }),
      }),
      updatePassword: builder.mutation({
        query: (pass: Record<string, string>) => ({
          url: '/password/update',
          method: 'PATCH',
          data: pass,
        }),
      }),
    }),
  });

export const {
  useGetUsersInfoQuery,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
} = usersApiEndpoints;
