import axios from "axios";
import { BASE_URL, getGenericConfig } from ".";
import { RecordLocationDto } from "./dtos/Location.dto";

const CONTROLLER_URL = `${BASE_URL}/location`;

export const recordLocationAsync = async (dto: RecordLocationDto) => {
  const config = getGenericConfig();

  return axios
    .post(`${CONTROLLER_URL}/user`, dto, config)
    .then((response) => response.data)
    .catch((response) => {
      throw response;
    });
};
