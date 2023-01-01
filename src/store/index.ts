/* eslint-disable no-use-before-define */
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory, createMemoryHistory } from 'history';

import {
  // appApi,
  authApi,
  passApi,
  // forumApi,
  usersApi,
} from './api';
import userReducer from './slices/userSlice';
import { isServer } from '../utils';

export * from './api/appApi/endpoints';
export * from './api/authApi/endpoints';
export * from './api/passApi/endpoints';
export * from './api/forumApi/endpoints';
export * from './api/usersApi/endpoints';
export * from './slices';

// global redeclared types
declare global {
  interface Window {
    __INITIAL_STATE__: RootState;
  }
}

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: !isServer ? createBrowserHistory() : createMemoryHistory(),
});

export const store = configureStore({
  reducer: {
    router: routerReducer,
    // Add the generated reducer as a specific top-level slice
    user: userReducer,
    // [appApi.reducerPath]: appApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [passApi.reducerPath]: passApi.reducer,
    // [forumApi.reducerPath]: forumApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      // appApi.middleware,
      authApi.middleware,
      passApi.middleware,
      // forumApi.middleware,
      usersApi.middleware,
      routerMiddleware,
    ),
});

export const history = createReduxHistory(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
