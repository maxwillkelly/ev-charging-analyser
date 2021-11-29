import axios from "axios";
import { LoginDto, LoginResponse } from "./dtos/Login.dto";
import { RegisterDto, RegisterResponse } from "./dtos/Register.dto";

export const loginAsync = async (dto: LoginDto): Promise<LoginResponse> => {
  return axios
    .post("http://localhost:5000/users/login", dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const registerAsync = async (
  dto: RegisterDto
): Promise<RegisterResponse> => {
  return axios
    .post("http://localhost:5000/users/register", dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
