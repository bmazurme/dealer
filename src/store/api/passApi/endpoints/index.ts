import passApi from '..';

const passApiEndpoints = passApi
  .enhanceEndpoints({
    addTagTypes: ['User'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      resetPassword: builder.mutation({
        query: (data: Record<string, string>) => ({
          url: '/password/reset',
          method: 'PATCH',
          data,
        }),
      }),
      newPassword: builder.mutation({
        query: (data: Record<string, string>) => ({
          url: '/password/new',
          method: 'PATCH',
          data,
        }),
      }),
    }),
  });

export const { useResetPasswordMutation, useNewPasswordMutation } = passApiEndpoints;
