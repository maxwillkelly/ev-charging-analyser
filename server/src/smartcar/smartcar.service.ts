import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Smartcar from 'smartcar';

@Injectable()
export class SmartcarService {
  private readonly client: any = null;
  private token: string;

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

  getAuthUrl() {
    const scope = ['read_vehicle_info', 'read_location', 'read_vin'];
    return this.client.getAuthUrl(scope);
  }

  async exchange(code: number) {
    this.token = await this.client.exchangeCode(code);
  }
}
