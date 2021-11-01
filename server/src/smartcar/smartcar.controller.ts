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
  exchange(@Query('code') code: number, @Res() response: Response) {
    this.smartcarService.exchange(code);
    const redirectUri = this.configService.get<string>('SMARTCAR_REDIRECT_URL');
    response.redirect(redirectUri);
  }
}
