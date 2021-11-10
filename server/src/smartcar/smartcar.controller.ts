import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { SmartCarService } from './smartCar.service';
import { Access } from 'smartcar';

@Controller('smartCar')
export class SmartCarController {
  constructor(private readonly smartCarService: SmartCarService) {}

  @Get('login')
  login(@Res() response: Response) {
    const link = this.smartCarService.getAuthUrl();
    response.redirect(link);
  }

  @Get('exchange')
  async exchange(
    @Query('code') code: string,
    @Query('error') error: string,
  ): Promise<Access | Error> {
    if (error) return new Error(error);

    return await this.smartCarService.exchange(code);
  }

  @Get('vehicle')
  async getVehicle(
    @Query('smartCarAccessToken', ParseUUIDPipe) smartCarAccessToken: string,
  ) {
    console.log(smartCarAccessToken);
    return await this.smartCarService.getVehicle(smartCarAccessToken);
  }
}
