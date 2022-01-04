import { IsDate, IsUUID } from 'class-validator';

export class AddCarDto {
  @IsUUID()
  id: string;

  @IsUUID()
  accessToken: string;

  @IsUUID()
  refreshToken: string;

  @IsDate()
  expiration: string;

  @IsDate()
  refreshExpiration: string;
}
