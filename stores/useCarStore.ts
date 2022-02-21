import create from "zustand";
import { CarDto } from "../api/dtos/Car.dto";

type CarStore = {
  selectedCar?: CarDto;
  setSelectedCar: (car: CarDto) => void;
  reset: () => void;
};

export const useCarStore = create<CarStore>((set) => ({
  setSelectedCar: (car) => set({ selectedCar: car }),
  reset: () => set({ selectedCar: undefined }),
}));
