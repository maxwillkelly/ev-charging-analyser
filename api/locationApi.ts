import axios from "axios";
import { BASE_URL } from ".";
import {
  RecordCarLocationDto,
  RecordUserLocationDto,
} from "./dtos/Location.dto";

const CONTROLLER_URL = `${BASE_URL}/location`;

export const recordCarLocationAsync = async (dto: RecordCarLocationDto) => {
  return axios
    .post(`${CONTROLLER_URL}/car`, dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};

export const recordUserLocationAsync = async (dto: RecordUserLocationDto) => {
  return axios
    .post(`${CONTROLLER_URL}/user`, dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
