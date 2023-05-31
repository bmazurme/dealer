import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '..';

type TypeItem = {
  id: string;
  count: number;
};

export type BucketState = {
  data: TypeItem[];
};

export const initialState: BucketState = {
  data: [],
};

const slice = createSlice({
  name: 'bucket',
  initialState: { data: [] } as BucketState,
  reducers: {
    addItem: (
      state,
      { payload: data }: PayloadAction<string>,
    ) => ({
      ...state,
      data: state.data.find((x) => x.id === data)
        ? state.data.map((x) => (x.id === data ? { id: data, count: x.count + 1 } : x))
        : [...state.data, { id: data, count: 1 }],
    }),
    removeItem: (
      state,
      { payload: data }: PayloadAction<string>,
    ) => ({
      ...state,
      data: state.data.map((x) => (x.id === data ? { ...x, count: x.count - 1 } : x))
        .filter((x) => x.count > 0),
    }),
  },
});

export const { addItem, removeItem } = slice.actions;

export default slice.reducer;

export const selectBucket = (state: RootState) => state.bucket.data;
