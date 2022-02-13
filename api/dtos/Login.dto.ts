import { UserDto } from "./User.dto";

export type LoginDto = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: UserDto;
  token: string;
};
