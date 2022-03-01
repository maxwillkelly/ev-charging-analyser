import { Meta } from "./Meta.dto";

export type CarActionDto = {
  userId: string;
  vehicleId: string;
};

export type CarActionResponse = {
  status: string;
  meta: Meta;
};
