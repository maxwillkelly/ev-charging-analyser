import axios from "axios";

export type SmartCarExchange = {
  url: string;
  userId: string;
};

export const exchangeAsync = async (url: string): Promise<boolean> => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
