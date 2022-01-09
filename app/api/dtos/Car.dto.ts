import { GetSmartCarTokenDto } from "./GetSmartCarToken.dto";

export interface CarDto extends GetSmartCarTokenDto {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddCarDto extends GetSmartCarTokenDto {
  userId: string;
}

