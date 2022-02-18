import { AttributesDto } from "./Attributes.dto";

export interface CarDto extends AttributesDto {
  percentRemaining: number;
  range: number;
  name: string;
}

export type GetCarsDto = {
  userId: string;
};
