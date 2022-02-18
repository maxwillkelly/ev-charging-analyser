import create from "zustand";
import { CarDto } from "../api/dtos/Attributes.dto";

type CarStore = {
  selectedCar?: CarDto;
  setSelectedCar: (car: CarDto) => void;
};

export const useCarStore = create<CarStore>((set) => ({
  setSelectedCar: (car) => set({ selectedCar: car }),
}));
