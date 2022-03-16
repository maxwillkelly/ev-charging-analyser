import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserLocationData } from "../api/dtos/Location.dto";
import { LoginResponse } from "../api/dtos/Login.dto";
import { User } from "../api/dtos/User.dto";

interface UserStore {
  user?: User;
  token?: string;
  location?: UserLocationData;
  login: (dto: LoginResponse) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>(
  persist(
    (set) => ({
      login: (dto) => set({ user: dto.user, token: dto.token }),
      logout: () => set({ user: undefined, token: undefined }),
    }),
    {
      name: "user-store",
      getStorage: () => AsyncStorage,
    }
  )
);
