import { ThingStructure } from "../models/things";
import { ThingsRepo } from "./things.api.repo";

const repo = new ThingsRepo();

describe("Given the things repo", () => {
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
