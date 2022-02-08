import { IsDateString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class RecordLocation {
  @IsOptional()
  @IsUUID()
  carId?: string;

  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsDateString()
  recordedAt: string;
}
