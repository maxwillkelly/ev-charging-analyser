import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { SmartCarService } from './smartCar/smartCar.service';
import { SmartCarController } from './smartCar/smartCar.controller';

const validationSchema = Joi.object({
  SERVER_PORT: Joi.number().default(5000),
  SMARTCAR_CLIENT_ID: Joi.string().uuid(),
  SMARTCAR_CLIENT_SECRET: Joi.string().uuid(),
  SMARTCAR_REDIRECT_URI: Joi.string().uri(),
  POSTGRES_DB: Joi.string(),
  POSTGRES_USER: Joi.string(),
  POSTGRES_PASSWORD: Joi.string(),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
    }),
  ],
  controllers: [AppController, SmartCarController],
  providers: [SmartCarService],
})
export class AppModule {}
