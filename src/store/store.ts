import { combineReducers, configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import contactReducer from './contactSlice';
import themeReducer from './themeSlice';

const rootReducer = combineReducers({
    menu: menuReducer,
    contact: contactReducer,
    theme: themeReducer,
})


export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
      reducer: rootReducer,
      preloadedState
    })
  }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
