import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from ".";
import { CarDto, GetCarsDto } from "./dtos/Car.dto";
import { CarActionDto, CarActionResponse } from "./dtos/CarAction.dto";
import { CarLocationDto } from "./dtos/CarLocation.dto";

const CONTROLLER_URL = `${BASE_URL}/cars`;

export const getCarsAsync = async (userId?: string): Promise<CarDto[]> => {
  if (!userId) return [];

  const config: AxiosRequestConfig<GetCarsDto> = {
    params: { userId },
  };

  return axios
    .get(CONTROLLER_URL, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const getCarLocationAsync = async (
  dto: CarActionDto
): Promise<CarLocationDto> => {
  const config: AxiosRequestConfig<CarActionDto> = {
    params: dto,
  };

  return axios
    .get(`${CONTROLLER_URL}/location`, config)
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
