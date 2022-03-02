import create from "zustand";
import { Car } from "../api/dtos/Car.dto";

type CarStore = {
  selectedCar?: Car;
  setSelectedCar: (car: Car) => void;
  reset: () => void;
};

export const useCarStore = create<CarStore>((set) => ({
  setSelectedCar: (car) => set({ selectedCar: car }),
  reset: () => set({ selectedCar: undefined }),
}));
