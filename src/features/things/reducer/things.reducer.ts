import { createReducer } from "@reduxjs/toolkit";
import { ThingStructure } from "../models/things";
import * as ac from "./things.action.creator";

const initialState: ThingStructure[] = [];

export const thingReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);

  builder.addCase(ac.load1Creator, (state, { payload }) => {
    state.find((item) => (item.id === payload.id ? payload : item));
  });
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    )
  );
  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addDefaultCase((state) => state);
});
