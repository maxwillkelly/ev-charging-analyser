import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SmartCar, {
  Access,
  ActionResponse,
  Attributes,
  AuthClient,
  Vehicle,
} from 'smartcar';

@Injectable()
export class SmartCarService {
  private readonly client: AuthClient = null;

  constructor(private configService: ConfigService) {
    const clientId = this.configService.get<string>('SMARTCAR_CLIENT_ID');
    const clientSecret = this.configService.get<string>(
      'SMARTCAR_CLIENT_SECRET',
    );
    const redirectUri = this.configService.get<string>('SMARTCAR_REDIRECT_URI');

    this.client = new SmartCar.AuthClient({
      clientId,
      clientSecret,
      redirectUri,
      testMode: true,
    });
  }

  getAuthUrl(): string {
    const scope = [
      // 'required:read_battery',
      // 'required:read_charge',
      // 'required:control_charge',
      // 'required:read_location',
      'required:control_security',
      // 'required:read_odometer',
      // 'required:read_tires',
      'required:read_vehicle_info',
      // 'required:read_vin',
    ];
    return this.client.getAuthUrl(scope);
  }

  exchange(code: string): Access {
    return this.client.exchangeCode(code);
  }

  getVehicle(smartCarAccessToken: string): Vehicle {
    const vehicles = SmartCar.getVehicles(smartCarAccessToken);

    // instantiate first vehicle in vehicle list
    const vehicle = new SmartCar.Vehicle(
      vehicles.vehicles[0],
      smartCarAccessToken,
    );

    return vehicle;
  }

  getVehicleAttributes(smartCarAccessToken: string): Attributes {
    const vehicle = this.getVehicle(smartCarAccessToken);
    return vehicle.attributes();
  }

  lockCar(smartCarAccessToken: string): ActionResponse {
    const vehicle = this.getVehicle(smartCarAccessToken);
    return vehicle.lock();
  }

  unlockCar(smartCarAccessToken: string): ActionResponse {
    const vehicle = this.getVehicle(smartCarAccessToken);
    return vehicle.unlock();
  }
}
