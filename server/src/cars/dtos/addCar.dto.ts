import { IsDate, IsOptional, IsUUID } from 'class-validator';

export class AddCarDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  accessToken: string;

  @IsUUID()
  refreshToken: string;

  @IsDate()
  expiration: string;

  @IsDate()
  refreshExpiration: string;
}

export class CarDto {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsUUID()
  accessToken: string | null;

  @IsOptional()
  @IsUUID()
  refreshToken: string | null;

  @IsOptional()
  @IsDate()
  expiration: Date | null;

  @IsOptional()
  @IsDate()
  refreshExpiration: Date | null;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
