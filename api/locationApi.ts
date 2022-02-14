import axios from "axios";
import { BASE_URL } from ".";
import {
  RecordCarLocationDto,
  RecordUserLocationDto,
} from "./dtos/Location.dto";

const CONTROLLER_URL = `${BASE_URL}/cars`;

export const recordLocationAsync = async (
  dto: RecordCarLocationDto | RecordUserLocationDto
) => {
  return axios
    .post(CONTROLLER_URL, dto)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
