import { Body, Controller, Post } from '@nestjs/common';
import { LockCarResponse } from 'src/smartCar/dto/lockCar.dto';
import { UnlockCarResponse } from 'src/smartCar/dto/unlockCar.dto';
import { SmartCarService } from 'src/smartCar/smartCar.service';
import { CarActionDto } from './dtos/carAction.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly smartCarService: SmartCarService) {}

  @Post('lock')
  async lockCar(@Body() command: CarActionDto): Promise<LockCarResponse> {
    const response = await this.smartCarService.lockCar(
      command.smartCarAccessToken,
    );

    return response;
  }

  @Post('unlock')
  async unlockCar(@Body() command: CarActionDto): Promise<UnlockCarResponse> {
    const response = await this.smartCarService.unlockCar(
      command.smartCarAccessToken,
    );

    return response;
  }
}
