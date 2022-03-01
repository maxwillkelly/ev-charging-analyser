import { User } from "./User.dto";

export type LoginDto = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: User;
  token: string;
};
