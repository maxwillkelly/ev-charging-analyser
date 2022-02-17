import create from "zustand";
import { UserLocationData } from "../api/dtos/Location.dto";

type LocationStore = {
  lastLocation?: UserLocationData;
  setLastLocation: (location: UserLocationData) => void;
};

export const useLocationStore = create<LocationStore>((set) => ({
  setLastLocation: (location) => set({ lastLocation: location }),
}));
