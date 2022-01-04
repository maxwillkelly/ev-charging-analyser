import { GetSmartCarTokenDto } from "./GetSmartCarToken.dto";

export interface CarDto extends GetSmartCarTokenDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}
