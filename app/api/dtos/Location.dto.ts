export type LocationDto = {
  latitude: number;
  longitude: number;
  recordedAt: string;
};

export interface RecordCarLocationDto extends LocationDto {
  carId?: string;
}

export interface RecordUserLocationDto extends LocationDto {
  userId?: string;
}
