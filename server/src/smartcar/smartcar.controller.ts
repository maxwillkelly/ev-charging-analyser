import { Controller, Get, Query, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { SmartcarService } from './smartcar.service';

@Controller('smartcar')
export class SmartcarController {
  constructor(
    private readonly smartcarService: SmartcarService,
    private configService: ConfigService,
  ) {}

  @Get('login')
  login(@Res() response: Response) {
    const link = this.smartcarService.getAuthUrl();
    response.redirect(link);
  }

  @Get('exchange')
  async exchange(@Query('code') code: string, @Query('error') error: string) {
    console.log(`Code: ${code}`);

    if (error) {
      // the user denied your requested permissions
      return new Error(error);
    }

    return await this.smartcarService.exchange(code);
    // const redirectUri = this.configService.get<string>(
    //   'SMARTCAR_REDIRECT_URI',
    // ) as string;
    // response.redirect(redirectUri);
  }

  @Get('vehicle')
  async getVehicle() {
    return await this.smartcarService.getVehicle();
  }
}
