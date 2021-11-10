import axios from "axios";
import { GetSmartCarTokenDto } from "./dtos/GetSmartCarToken.dto";

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
