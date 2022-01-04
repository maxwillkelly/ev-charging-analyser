import axios from "axios";
import { CarDto } from "./dtos/Car.dto";
import { CarActionDto, CarActionResponse } from "./dtos/CarAction.dto";
import { GetSmartCarTokenDto } from "./dtos/GetSmartCarToken.dto";

const CONTROLLER_URL = "http://localhost:5000/cars";

export const addCarAsync = async (
  dto: GetSmartCarTokenDto
): Promise<CarDto> => {
  return axios
    .post(`${CONTROLLER_URL}/add`, dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const lockAsync = async (
  dto: CarActionDto
): Promise<CarActionResponse> => {
  return axios
    .post(`${CONTROLLER_URL}/lock`, dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const unlockAsync = async (
  dto: CarActionDto
): Promise<CarActionResponse> => {
  return axios
    .post(`${CONTROLLER_URL}/unlock`, dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
