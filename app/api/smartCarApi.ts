import axios, { AxiosRequestConfig } from "axios";
import { GetSmartCarTokenDto } from "./dtos/GetSmartCarToken.dto";
import { VehicleDto } from "./dtos/VehicleDto.dto";

export const getSmartCarTokenAsync = async (
  smartCarConnectRedirectUrl: string
): Promise<GetSmartCarTokenDto> => {
  return axios
    .get(smartCarConnectRedirectUrl)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

type SmartCarAccessTokenDto = {
  smartCarAccessToken: string;
};

export const getVehicleAsync = async (
  smartCarAccessToken: string
): Promise<VehicleDto> => {
  const config: AxiosRequestConfig<SmartCarAccessTokenDto> = {
    params: {
      smartCarAccessToken,
    },
  };

  return axios
    .get("http://localhost:5000/smartcar/vehicle", config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
