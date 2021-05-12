import { configureStore, ThunkAction, Action  } from '@reduxjs/toolkit';
import appSliceReducer from './appSlice' 
import headerSliceReducer from './headerSlice'

export const store = configureStore({
  reducer: {
   appSlice: appSliceReducer,
   headerSlice: headerSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
