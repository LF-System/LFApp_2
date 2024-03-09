import { create } from "zustand";
import { Unit } from "../Entities";
import { HttpPager } from "../../../../Shared/Libraries/HttpClient/Interface/HttpClientInterface";

export interface UnitStore {
  item: Unit | undefined;
  paged: HttpPager<Unit> | undefined;
  setItem: (item: Unit | undefined) => void;
  setPaged: (paged: HttpPager<Unit> | undefined) => void;
};

export const useUnitStore = create<UnitStore>((set) => ({
  item: undefined,
  paged: undefined,
  setItem: (item) => set(() => ({ item })),
  setPaged: (paged) => set(() => ({ paged })),
}));
