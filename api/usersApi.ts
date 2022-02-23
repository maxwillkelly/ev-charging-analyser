import axios from "axios";
import { BASE_URL } from ".";
import { LoginDto, LoginResponse } from "./dtos/Login.dto";
import { RegisterDto } from "./dtos/Register.dto";

const CONTROLLER_URL = `${BASE_URL}/users`;

export const loginAsync = async (dto: LoginDto): Promise<LoginResponse> => {
  return axios
    .post(`${CONTROLLER_URL}/login`, dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const registerAsync = async (
  dto: RegisterDto
): Promise<LoginResponse> => {
  return axios
    .post(`${CONTROLLER_URL}/register`, dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
