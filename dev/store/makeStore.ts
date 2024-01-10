import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@/store/slices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 从存储本身推断出 RootState 和 AppDispatch 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
