import {
  IsDate,
  IsDateString,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';
import { AttributesDto } from 'src/smartCar/dtos/attributes';

export class AddCarDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  accessToken: string;

  @IsUUID()
  refreshToken: string;

  @IsDateString()
  expiration: string;

  @IsDateString()
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

export class NewCarDto extends AttributesDto {
  @IsString()
  name: string;

  @IsInt()
  @IsPositive()
  batteryPercentage: number;
}
