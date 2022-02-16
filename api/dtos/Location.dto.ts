export interface RecordCarLocationDto {
  carId: string;
  latitude: number;
  longitude: number;
  recordedAt: string;
}

export type UserCoordinatesDto = {
  latitude: number;
  longitude: number;
  altitude: number;
  heading: number;
  altitudeAccuracy: number;
  speed: number;
  accuracy: number;
};

export type UserLocations = {
  locations: UserLocationData[];
}

export type UserLocationData = {
  timestamp: number;
  coords: UserCoordinatesDto;
};

export interface RecordUserLocationDto extends UserLocationData {
  userId: string;
}
