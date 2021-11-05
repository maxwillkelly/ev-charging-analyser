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
    const scope = ['required:read_vehicle_info'];
    return this.client.getAuthUrl(scope);
  }

  async exchange(code: string): Promise<Access> {
    return await this.client.exchangeCode(code);
  }

  async getVehicle(smartCarAccessToken: string): Promise<Record<string, any>> {
    const vehicles = await SmartCar.getVehicles(smartCarAccessToken);

    // instantiate first vehicle in vehicle list
    const vehicle = new SmartCar.Vehicle(
      vehicles.vehicles[0],
      smartCarAccessToken,
    );

    // get identifying information about a vehicle
    const attributes = await vehicle.attributes();
    return attributes;
  }
}
