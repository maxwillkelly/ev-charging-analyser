import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Smartcar, { Access, AuthClient } from 'smartcar';

@Injectable()
export class SmartcarService {
  private readonly client: AuthClient = null;
  private access: Access = null;

  constructor(private configService: ConfigService) {
    const clientId = this.configService.get<string>('SMARTCAR_CLIENT_ID');
    const clientSecret = this.configService.get<string>(
      'SMARTCAR_CLIENT_SECRET',
    );
    const redirectUri = this.configService.get<string>('SMARTCAR_REDIRECT_URI');

    this.client = new Smartcar.AuthClient({
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

  async exchange(code: string): Promise<boolean> {
    this.access = await this.client.exchangeCode(code);
    return true;
  }

  async getVehicle(): Promise<Record<string, any>> {
    const vehicles = await Smartcar.getVehicles(this.access.accessToken);

    // instantiate first vehicle in vehicle list
    const vehicle = new Smartcar.Vehicle(
      vehicles.vehicles[0],
      this.access.accessToken,
    );

    // get identifying information about a vehicle
    const attributes = await vehicle.attributes();
    return attributes;
  }
}
