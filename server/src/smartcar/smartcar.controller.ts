import { Controller, Get, ParseUUIDPipe, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { SmartCarService } from './smartCar.service';
import { Access } from 'smartcar';
import { GetVehicleResponse } from './dto/getVehicle.dto';

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
  ): Promise<Access> {
    if (error) return new Error(error);

    return await this.smartCarService.exchange(code);
  }

  // @ApiOkResponse({ type: GetVehicleResponse })
  @Get('vehicle')
  async getVehicleAttributes(
    @Query('smartCarAccessToken', ParseUUIDPipe) smartCarAccessToken: string,
  ): Promise<GetVehicleResponse> {
    return await this.smartCarService.getVehicleAttributes(smartCarAccessToken);
  }
}
