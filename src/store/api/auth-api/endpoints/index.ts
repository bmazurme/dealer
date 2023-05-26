import authApi from '..';

const authApiEndpoints = authApi
  .enhanceEndpoints({
    addTagTypes: ['auth'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      signUp: builder.mutation<void, Omit<User, 'id' | 'display_name'>>({
        query: (data) => ({
          url: '/signup',
          method: 'POST',
          data,
        }),
      }),
      signIn: builder.mutation<void, { email: string, password: string }>({
        query: (data) => ({
          url: '/signin',
          method: 'POST',
          data,
        }),
      }),
      getUser: builder.mutation<User | null, void>({
        query: () => ({
          url: '/users/me',
          method: 'GET',
        }),
        invalidatesTags: ['auth'],
      }),
      confirmUser: builder.mutation({
        query: (token: string) => ({
          url: `/confirm/${token}`,
          method: 'GET',
        }),
        invalidatesTags: ['auth'],
      }),
      signOut: builder.mutation<void, void>({
        query: () => ({
          url: '/logout',
          method: 'POST',
        }),
        invalidatesTags: ['auth'],
      }),
    }),
  });

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetUserMutation,
  useSignOutMutation,
  useConfirmUserMutation,
} = authApiEndpoints;
