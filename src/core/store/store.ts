import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { thingReducer } from "../../features/things/reducer/things.reducer";

export const store = configureStore({
  reducer: {
    things: thingReducer,
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
