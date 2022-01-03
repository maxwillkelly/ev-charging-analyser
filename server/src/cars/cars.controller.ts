import { Body, Controller, Post } from '@nestjs/common';
import { ActionResponseDto } from 'src/smartCar/dtos/actionResponse.dto';
import { SmartCarService } from 'src/smartCar/smartCar.service';
import { CarActionDto } from './dtos/carAction.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly smartCarService: SmartCarService) {}

  @Post('lock')
  async lockCar(@Body() command: CarActionDto): Promise<ActionResponseDto> {
    const response = this.smartCarService.lockCar(command.smartCarAccessToken);

    return response;
  }

  @Post('unlock')
  async unlockCar(@Body() command: CarActionDto): Promise<ActionResponseDto> {
    const response = this.smartCarService.unlockCar(
      command.smartCarAccessToken,
    );

    return response;
  }
}
