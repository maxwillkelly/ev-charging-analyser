import Constants from "expo-constants";
import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { useUserStore } from "../stores/useUserStore";

export const API_URL = Constants.manifest?.extra?.apiUrl as string;

export const getHeaders = (): AxiosRequestHeaders => {
  const { token } = useUserStore.getState();
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getGenericConfig = (): AxiosRequestConfig => ({
  headers: getHeaders(),
});
