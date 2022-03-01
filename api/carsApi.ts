import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, getHeaders, getGenericConfig } from ".";
import { Car } from "./dtos/Car.dto";
import { CarActionDto, CarActionResponse } from "./dtos/CarAction.dto";
import { CarLocationDto } from "./dtos/CarLocation.dto";

const CONTROLLER_URL = `${BASE_URL}/cars`;

export const getCarsAsync = async (userId?: string): Promise<Car[]> => {
  if (!userId) return [];

  const config: AxiosRequestConfig<{ userId: string }> = {
    headers: getHeaders(),
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
    headers: getHeaders(),
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
  const config = getGenericConfig();

  return axios
    .post(`${CONTROLLER_URL}/lock`, dto, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const unlockAsync = async (
  dto: CarActionDto
): Promise<CarActionResponse> => {
  const config = getGenericConfig();

  return axios
    .post(`${CONTROLLER_URL}/unlock`, dto, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
