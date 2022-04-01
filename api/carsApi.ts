import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, getHeaders, getGenericConfig } from ".";
import { BatteryCharge } from "./dtos/BatteryCharge";
import { Car } from "./dtos/Car.dto";
import { CarActionDto, CarActionResponse } from "./dtos/CarAction.dto";
import { CarLocation } from "./dtos/CarLocation.dto";
import { Charge } from "./dtos/Charge";

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
): Promise<CarLocation> => {
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

export const startChargingAsync = async (
  dto: CarActionDto
): Promise<CarActionResponse> => {
  const config = getGenericConfig();

  return axios
    .post(`${CONTROLLER_URL}/startCharging`, dto, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const stopChargingAsync = async (
  dto: CarActionDto
): Promise<CarActionResponse> => {
  const config = getGenericConfig();

  return axios
    .post(`${CONTROLLER_URL}/stopCharging`, dto, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const getChargingHistoryAsync = async (
  vehicleId?: string
): Promise<BatteryCharge[]> => {
  const config: AxiosRequestConfig<{ vehicleId: string }> = {
    headers: getHeaders(),
    params: { vehicleId },
  };

  return axios
    .get(`${CONTROLLER_URL}/chargingHistory`, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const getChargesAsync = async (
  vehicleId?: string,
  date?: string
): Promise<Charge[]> => {
  const config: AxiosRequestConfig<{ vehicleId: string; date: string }> = {
    headers: getHeaders(),
    params: { vehicleId, date },
  };

  return axios
    .get(`${CONTROLLER_URL}/charges`, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const disconnectCarAsync = async (dto: CarActionDto) => {
  const config: AxiosRequestConfig = {
    headers: getHeaders(),
    data: dto,
  };

  return axios
    .delete(`${CONTROLLER_URL}/disconnect`, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
