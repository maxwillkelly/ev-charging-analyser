import create from "zustand";
import { NewCarDto } from "../api/dtos/Attributes.dto";

type CarStore = {
  selectedCar: NewCarDto | null;
  setSelectedCar: (car: NewCarDto) => void;
};

export const useCarStore = create<CarStore>((set) => ({
  selectedCar: null,
  setSelectedCar: (car) => set({ selectedCar: car }),
}));
