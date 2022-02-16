export interface RecordCarLocationDto {
  carId?: string;
  latitude: number;
  longitude: number;
  recordedAt: string;
}

export type UserCoordinatesDto = {
  altitude: number,
  heading: number,
  altitudeAccuracy: number;
  latitude: number;
  speed: number;
  longitude: number;
  accuracy: number;
}

export interface RecordUserLocationDto {
  userId?: string;
  timestamp: number;
  coords: UserCoordinatesDto;
}
