import { MetaDto } from "./Meta.dto";

export type AttributesDto = {
  id: string;
  make: string;
  model: string;
  year: number;
  meta: MetaDto;
};

export interface NewCarDto extends AttributesDto {
  percentRemaining: number;
  range: number;
  name: string;
}
