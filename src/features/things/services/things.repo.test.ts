import { ThingStructure } from "../models/things";
import { ThingsRepo } from "./things.api.repo";

const repo = new ThingsRepo();

describe("Given the things repo", () => {
  describe("When we call the method loadThings as an instance of the class", () => {
    test("Then it should show all of the values fetched", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue([{ test: "test" }] as unknown as ThingStructure[]),
      });
      expect(repo).toBeInstanceOf(ThingsRepo);
      const loadThings = await repo.loadThings();
      expect(loadThings).toEqual([{ test: "test" }]);
    });
  });
  describe("When we call the method load1Thing as an instance of the class", () => {
    test("Then it should show one single value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue([{ test: "test" }] as unknown as ThingStructure),
      });
      expect(repo).toBeInstanceOf(ThingsRepo);
      const load1Thing = await repo.load1Thing(2);
      expect(load1Thing).toEqual([{ test: "test" }]);
    });
  });
  describe("When we call the method addThing as an instance of the class", () => {
    test("Then it should show one single new value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue([{ test: "test4" }] as unknown as ThingStructure),
      });
      const add = await repo.addThing({
        test: "test4",
      } as unknown as Partial<ThingStructure>);
      expect(repo).toBeInstanceOf(ThingsRepo);
      expect(add).toEqual([{ test: "test4" }]);
    });
  });
  describe("When it calls the method delete", () => {
    test("Then it should call fetch and no return", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn(),
      });

      const delet = await repo.deleteThing({ id: 1 });
      expect(fetch).toHaveBeenCalled();
      expect(delet).toBe(undefined);
    });
  });
  describe("When it calls the method update", () => {
    test("Then it should call fetch and return a new array", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          id: 2,
          name: "Cosa 2",
          howInteresting: 1,
          howImportant: 1,
        } as unknown as Partial<ThingStructure>),
      });
      const update = await repo.updateThing({
        id: 2,
        name: "Cosa 2",
        howInteresting: 5,
        howImportant: 5,
      });
      expect(update).toEqual({
        id: 2,
        name: "Cosa 2",
        howInteresting: 1,
        howImportant: 1,
      });
    });
  });
});
