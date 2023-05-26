import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '..';
import { authApi, usersApi } from '../api';

export type AuthState = {
  data: User | null
};

export const initialState: AuthState = {
  data: null,
};

const slice = createSlice({
  name: 'auth',
  initialState: { data: null } as AuthState,
  reducers: {
    // setCredentials: (
    //   state,
    //   { payload: data }: PayloadAction<User | null>,
    // ) => ({ ...state, data }),
  },
  extraReducers: (builder) => {
    builder
      // @ts-ignore
      .addMatcher(authApi.endpoints.getUser.matchFulfilled, (state, action) => {
        console.log('fulfilled', action);
        return { ...state, data: action.payload };
      })
      // @ts-ignore
      .addMatcher(authApi.endpoints.getUser.matchRejected, (state, action) => {
        console.log('rejected', action);
      })
      // @ts-ignore
      .addMatcher(authApi.endpoints.signOut.matchFulfilled, (state, action) => {
        console.log('fulfilled', action);
        return { ...state, data: null };
      })
      // @ts-ignore
      .addMatcher(authApi.endpoints.signOut.matchRejected, (state, action) => {
        console.log('rejected', action);
      })
      // @ts-ignore
      .addMatcher(usersApi.endpoints.updateUser.matchFulfilled, (state, action) => {
        console.log('fulfilled', action);
        return { ...state, data: action.payload };
      })
      // @ts-ignore
      .addMatcher(usersApi.endpoints.updateUser.matchRejected, (state, action) => {
        console.log('rejected', action);
      });
  },
});

// export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.user.data;
