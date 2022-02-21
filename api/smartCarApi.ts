import axios from "axios";
import { getGenericConfig } from ".";

export type SmartCarExchange = {
  url: string;
  userId: string;
};

export const exchangeAsync = async (url: string): Promise<boolean> => {
  const config = getGenericConfig();

  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
