import create from "zustand";
// import { persist } from "zustand/middleware";
import { GetSmartCarTokenDto } from "../api/dtos/GetSmartCarToken.dto";

interface UserStore {
  smartCarToken: GetSmartCarTokenDto | null;
  setSmartCarToken: (smartCarToken: GetSmartCarTokenDto) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  smartCarToken: null,
  setSmartCarToken: (smartCarToken: GetSmartCarTokenDto) =>
    set({ smartCarToken }),
}));
