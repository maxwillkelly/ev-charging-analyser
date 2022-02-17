import create from "zustand";
import { NewCarDto } from "../api/dtos/Attributes.dto";

type CarStore = {
  selectedCar?: NewCarDto;
  setSelectedCar: (car: NewCarDto) => void;
};

export const useCarStore = create<CarStore>((set) => ({
  setSelectedCar: (car) => set({ selectedCar: car }),
}));
