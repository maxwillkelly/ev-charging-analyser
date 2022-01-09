import create from "zustand";
// import { persist } from "zustand/middleware";
import { GetSmartCarTokenDto } from "../api/dtos/GetSmartCarToken.dto";
import { LoginResponse } from "../api/dtos/Login.dto";
import { UserDto } from "../api/dtos/User.dto";

interface UserStore {
  smartCarToken: GetSmartCarTokenDto | null;
  user: UserDto | null;
  token: string | null;
  setSmartCarToken: (smartCarToken: GetSmartCarTokenDto) => void;
  login: (dto: LoginResponse) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  smartCarToken: null,
  user: null,
  token: null,
  setSmartCarToken: (smartCarToken) => set({ smartCarToken }),
  login: (dto) => set({ user: dto.user, token: dto.token }),
  logout: () => set({ user: null, token: null }),
}));
