/* eslint-disable no-use-before-define */
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import {
  authApi, bpmApi, passApi, usersApi,
} from './api';
import userReducer from './slices/user-slice';
import bucketReducer from './slices/bucket-slice';
import itemSlice from './slices/item-slice';

export * from './api/auth-api/endpoints';
export * from './api/bpm-api/endpoints';
export * from './api/pass-api/endpoints';
export * from './api/users-api/endpoints';
export * from './slices';

// global redeclared types
declare global {
  interface Window {
    __INITIAL_STATE__: RootState;
  }
}

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    user: userReducer,
    bucket: bucketReducer,
    item: itemSlice,
    [authApi.reducerPath]: authApi.reducer,
    [bpmApi.reducerPath]: bpmApi.reducer,
    [passApi.reducerPath]: passApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      authApi.middleware,
      passApi.middleware,
      usersApi.middleware,
      bpmApi.middleware,
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
