import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActionResponseDto } from 'src/smartCar/dtos/actionResponse.dto';
import { SmartCarService } from 'src/smartCar/smartCar.service';
import { CarActionDto } from './dtos/carAction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddCarDto, CarDto, NewCarDto } from './dtos/addCar.dto';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly smartCarService: SmartCarService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post('add')
  async addCar(@Body() command: AddCarDto): Promise<CarDto> {
    return await this.prismaService.car.create({ data: command });
  }

  @Get(':smartCarAccessToken')
  async getCars(
    @Param('smartCarAccessToken') smartCarAccessToken: string,
  ): Promise<NewCarDto[]> {
    const attributes = await this.smartCarService.getVehiclesAttributes(
      smartCarAccessToken,
    );
    // const carsQuery = await this.prismaService.car.findMany({
    //   where: {
    //     userId,
    //   },
    // });

    // const cars = carsQuery.map((c) => {
    //   const attributes = this.smartCarService.getVehicleAttributes(
    //     c.accessToken,
    //   );

    console.log(JSON.stringify(attributes, null, 2));

    const cars = attributes.map((a) => {
      const { make, model, year } = a;
      const name = `${year} ${make} ${model}`;

      return { ...a, name, batteryPercentage: 80 };
    });

    console.log(JSON.stringify(cars, null, 2));

    return cars;
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
