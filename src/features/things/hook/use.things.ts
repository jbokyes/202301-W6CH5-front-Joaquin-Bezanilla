import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { ThingsRepo } from "../services/things.api.repo";
import * as ac from "../reducer/things.action.creator";
import { ThingStructure } from "../models/things";

export function useThings(repo: ThingsRepo) {
  const thing = useSelector((state: RootState) => state.things);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadAllThings = async () => {
      try {
        const data = await repo.loadThings();
        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log("Error");
      }
    };

    loadAllThings();
  }, [dispatch, repo]);
  const load1Thing = async (id: number) => {
    try {
      const data = await repo.load1Thing(id);
      dispatch(ac.load1Creator(data));
    } catch (error) {
      console.log("Error");
    }
  };

  const addThing = async (info: ThingStructure) => {
    try {
      const data = await repo.addThing(info);
      dispatch(ac.addCreator(data));
    } catch (error) {
      console.log("Error");
    }
  };

  const deleteThing = async (id: number) => {
    try {
      await repo.deleteThing(id);
      dispatch(ac.deleteCreator(id));
    } catch {}
  };
}
