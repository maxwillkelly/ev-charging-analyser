import { MetaDto } from "./Meta.dto";

export type CarActionDto = {
  userId: string;
  vehicleId: string;
};

export type UnitSystem = "metric" | "imperial";

export type CarActionResponse = {
  status: string;
  meta: MetaDto;
};
