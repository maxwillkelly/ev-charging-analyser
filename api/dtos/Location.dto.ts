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

export interface RecordLocationDto extends UserLocationData {
  userId: string;
}
