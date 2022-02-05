import { Injectable } from '@nestjs/common';
import { LocationRepository } from './location.repository';

@Injectable()
export class LocationService {
  constructor(private locationRepository: LocationRepository) {}

  getLocations() {
    return this.locationRepository.getLocations();
  }
}
