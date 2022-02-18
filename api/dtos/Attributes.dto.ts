import { MetaDto } from "./Meta.dto";

export type AttributesDto = {
  id: string;
  make: string;
  model: string;
  year: number;
  meta: MetaDto;
};