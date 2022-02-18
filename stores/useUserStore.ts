import create from "zustand";
// import { persist } from "zustand/middleware";
// import { GetSmartCarTokenDto } from "../api/dtos/SmartCarExchange.dto";
import { UserLocationData } from "../api/dtos/Location.dto";
import { LoginResponse } from "../api/dtos/Login.dto";
import { UserDto } from "../api/dtos/User.dto";

interface UserStore {
  // smartCarToken?: GetSmartCarTokenDto;
  user?: UserDto;
  token?: string;
  location?: UserLocationData;
  // setSmartCarToken: (smartCarToken: GetSmartCarTokenDto) => void;
  login: (dto: LoginResponse) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  // setSmartCarToken: (smartCarToken) => set({ smartCarToken }),
  login: (dto) => set({ user: dto.user, token: dto.token }),
  logout: () => set({ user: undefined, token: undefined }),
}));
