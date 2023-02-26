import { createAction } from "@reduxjs/toolkit";
import { ThingStructure } from "../models/things";
import { thingsActions } from "./things.actions.types";

export const loadCreator = createAction<ThingStructure[]>(thingsActions.load);
export const load1Creator = createAction<ThingStructure>(thingsActions.load1);
export const addCreator = createAction<ThingStructure>(thingsActions.addThing);
export const updateCreator = createAction<ThingStructure>(
  thingsActions.updateThing
);
export const deleteCreator = createAction<ThingStructure>(
  thingsActions.deleteThing
);
