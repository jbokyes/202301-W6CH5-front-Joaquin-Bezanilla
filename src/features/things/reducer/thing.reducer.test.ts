import { ThingStructure } from "../models/things";
import { thingReducer } from "./things.reducer";
import {
  addCreator,
  deleteCreator,
  load1Creator,
  loadCreator,
  updateCreator,
} from "./things.action.creator";

describe("Given the thingReducer function", () => {
  describe("When we load an array of things", () => {
    test("Then it should load an array of things", () => {
      let result = thingReducer([], loadCreator);
      expect(result).toEqual([]);
    });
  });

  describe("When we load a single object from the array of things", () => {
    test("Then it should load a single object from MOCK_THINGS", () => {
      let result = thingReducer([], load1Creator);
      expect(result).toEqual([]);
    });
  });
  describe("When we try to add an object", () => {
    test("Then it should load a new item", () => {
      const mock1: ThingStructure = {
        id: 1,
        name: "Cosa 1",
        howInteresting: 1,
        howImportant: 1,
      };
      let result = thingReducer([], addCreator(mock1));
      expect(result).toEqual([mock1]);
    });
  });
  describe("When we try to delete an object", () => {
    test("Then it should delete a new item", () => {
      let result = thingReducer([], deleteCreator);
      expect(result).toEqual([]);
    });
  });
  describe("When we try to update (edit) an object", () => {
    test("Then it should update a new item", () => {
      const mock2: ThingStructure = {
        id: 1,
        name: "Cosa 1",
        howInteresting: 1,
        howImportant: 1,
      };
      const mock3: ThingStructure = {
        id: 1,
        name: "Cosa 2",
        howInteresting: 1,
        howImportant: 1,
      };
      let result = thingReducer([mock2], updateCreator(mock3));
      expect(result).toEqual([mock3]);
    });
  });
});
