import create from "zustand";
// import { persist } from "zustand/middleware";
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

export const useUserStore = create<UserStore>((set) => ({
  login: (dto) => set({ user: dto.user, token: dto.token }),
  logout: () => set({ user: undefined, token: undefined }),
}));
