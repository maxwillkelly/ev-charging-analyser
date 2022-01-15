import axios from "axios";
import { AddCarDto, CarDto } from "./dtos/Car.dto";
import { CarActionDto, CarActionResponse } from "./dtos/CarAction.dto";

const CONTROLLER_URL = "http://localhost:5000/cars";

export const addCarAsync = async (dto: AddCarDto): Promise<CarDto> => {
  return axios
    .post(`${CONTROLLER_URL}/add`, dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const getCarsAsync = async (): Promise<CarDto[]> => {
  return axios
    .get(`${CONTROLLER_URL}`)
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
