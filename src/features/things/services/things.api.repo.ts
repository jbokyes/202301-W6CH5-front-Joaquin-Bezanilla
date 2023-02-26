import { ThingStructure } from "../models/things";

export interface ThingApiRepoStructure {
  loadThings(): Promise<ThingStructure[]>;
  load1Thing(id: number): Promise<ThingStructure>;
  updateThing(thing: ThingStructure): Promise<ThingStructure>;
  addThing(thing: ThingStructure): Promise<ThingStructure>;
  deleteThing(id: Partial<ThingStructure>): Promise<void>;
}

export class ThingsRepo implements ThingApiRepoStructure {
  constructor(public url: string = "http://localhost:2322") {}
  async loadThings(): Promise<ThingStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok) {
      throw new Error("Error http: " + resp.status + ". " + resp.statusText);
    }
    const data = (await resp.json()) as ThingStructure[];
    return data;
  }

  async load1Thing(id: number): Promise<ThingStructure> {
    const resp = await fetch(this.url + "/" + id);
    if (!resp.ok) {
      throw new Error("Error http: " + resp.status + ". " + resp.statusText);
    }
    const data = await resp.json();
    return data;
  }
  async addThing(thing: Partial<ThingStructure>): Promise<ThingStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(thing),
      headers: { "Content-type": "application/json" },
    });
    if (!resp.ok) {
      throw new Error("Error HTTP " + resp.status + ". " + resp.status);
    }
    const data = (await resp.json()) as ThingStructure;
    return data;
  }
  async deleteThing(id: Partial<ThingStructure>): Promise<void> {
    const resp = await fetch(this.url + "/" + id, { method: "DELETE" });
    if (!resp.ok) {
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
    }
  }
  async updateThing(thing: ThingStructure): Promise<ThingStructure> {
    const url = this.url + "/" + thing.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(thing),
      headers: { "Content-type": "application/json" },
    });
    if (!resp.ok) {
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
    }
    const data = (await resp.json()) as ThingStructure;
    return data;
  }
}
