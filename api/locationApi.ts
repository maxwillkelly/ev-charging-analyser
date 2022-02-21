import axios from "axios";
import { BASE_URL, getGenericConfig } from ".";
import {
  RecordCarLocationDto,
  RecordUserLocationDto,
} from "./dtos/Location.dto";

const CONTROLLER_URL = `${BASE_URL}/location`;

export const recordCarLocationAsync = async (dto: RecordCarLocationDto) => {
  const config = getGenericConfig();

  return axios
    .post(`${CONTROLLER_URL}/car`, dto, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const recordUserLocationAsync = async (dto: RecordUserLocationDto) => {
  const config = getGenericConfig();

  return axios
    .post(`${CONTROLLER_URL}/user`, dto, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
