import { Body, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SmartCar, { Access, AuthClient } from 'smartcar';
import { GetVehicleDto } from './dto/getVehicle.dto';

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

  async exchange(code: string): Promise<Access> {
    return await this.client.exchangeCode(code);
  }

  async getVehicle(smartCarAccessToken: string): Promise<any> {
    const vehicles = await SmartCar.getVehicles(smartCarAccessToken);

    // instantiate first vehicle in vehicle list
    const vehicle = new SmartCar.Vehicle(
      vehicles.vehicles[0],
      smartCarAccessToken,
    );

    return vehicle;
  }

  async getAttributes(
    smartCarAccessToken: string,
  ): Promise<Record<string, any>> {
    const vehicle = await this.getVehicle(smartCarAccessToken);
    // get identifying information about a vehicle
    const attributes = await vehicle.attributes();
    return attributes;
  }

  async lockCar(smartCarAccessToken: string) {
    const vehicle = await this.getVehicle(smartCarAccessToken);

    return vehicle.lock();
  }

  async unlockCar(smartCarAccessToken: string) {
    const vehicle = await this.getVehicle(smartCarAccessToken);

    return vehicle.unlock();
  }
}
