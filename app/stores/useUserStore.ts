import create from "zustand";
import { persist } from "zustand/middleware";
import { GetSmartCarTokenDto } from "../api/dtos/GetSmartCarToken.dto";

// interface UserStore {
//   smartCarToken: string;
//   setSmartCarToken: (smartCarToken: GetSmartCarTokenDto) => void;
// }

export const useUserStore = create(
  persist(
    (set) => ({
      smartCarToken: "",
      setSmartCarToken: (smartCarToken: GetSmartCarTokenDto) =>
        set({ smartCarToken }),
    }),
    { name: "user-store" }
  )
);
