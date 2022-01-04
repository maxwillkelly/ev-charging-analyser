import { Body, Controller, Post } from '@nestjs/common';
import { ActionResponseDto } from 'src/smartCar/dtos/actionResponse.dto';
import { SmartCarService } from 'src/smartCar/smartCar.service';
import { CarActionDto } from './dtos/carAction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Car } from '@prisma/client';
import { AddCarDto } from './dtos/addCar.dto';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly smartCarService: SmartCarService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post('add')
  async addCar(@Body() command: AddCarDto): Promise<Car> {
    return await this.prismaService.car.create({ data: command });
  }

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
