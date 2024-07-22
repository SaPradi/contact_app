
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import contactSlice from './contactSlice';
import themeSlice from './themeSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    contact:contactSlice,
    theme:themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;