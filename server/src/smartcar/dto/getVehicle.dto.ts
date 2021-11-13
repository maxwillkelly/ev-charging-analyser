import { IsUUID } from 'class-validator';

export class GetVehicleDto {
  @IsUUID()
  smartCarAccessToken: string;
}
