import { GetSmartCarTokenDto } from "./GetSmartCarToken.dto";

export interface CarDto extends GetSmartCarTokenDto {
  id: string;
  userId: string;
  name: string;
  batteryPercentage: number;
  createdAt: string;
  updatedAt: string;
}

export interface AddCarDto extends GetSmartCarTokenDto {
  userId: string;
}

