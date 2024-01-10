import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 默认值
const initialState = {
  count: 0,
};

// 切片
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state: typeof initialState, actions: PayloadAction<typeof initialState>) => {
      return { count: state.count + actions.payload.count };
    },
    subtract: (state: typeof initialState, actions: PayloadAction<typeof initialState>) => {
      return { count: state.count - actions.payload.count };
    },
    reset: () => {
      return initialState;
    },
  },
});

// 导出 actions
export const counterActions = counterSlice.actions;
// 导出 reducer
export const counterReducer = counterSlice.reducer;
