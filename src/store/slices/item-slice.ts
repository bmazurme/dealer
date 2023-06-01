import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '..';

type TypeItem = {
  id: string;
  name: number;
  image: string;
  description: string;
  price: number;
};

export type ItemState = {
  data: TypeItem[];
};

export const initialItemState: ItemState = {
  data: [],
};

const slice = createSlice({
  name: 'item',
  initialState: { data: [] } as ItemState,
  reducers: {
    setItems: (
      state,
      { payload: data }: PayloadAction<TypeItem[]>,
    ) => ({ ...state, data }),
  },
});

export const { setItems } = slice.actions;

export default slice.reducer;

export const selectItem = (state: RootState) => state.item.data;
