import { IsInt, IsString, IsUUID } from 'class-validator';

export class GetVehicleDto {
  @IsUUID()
  smartCarAccessToken: string;
}

export class GetVehicleResponse {
  @IsUUID()
  id: string;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsInt()
  year: number;
}
