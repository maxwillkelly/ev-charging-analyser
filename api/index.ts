import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { useUserStore } from "../stores/useUserStore";

export const BASE_URL = "https://ev-charging-analyser-api.herokuapp.com";
// export const BASE_URL = "http://localhost:5000";

export const getHeaders = (): AxiosRequestHeaders => {
  const { token } = useUserStore.getState();
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getGenericConfig = (): AxiosRequestConfig => ({ headers: getHeaders() });
