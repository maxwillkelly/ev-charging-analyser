import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { SmartCarService } from './smartCar/smartCar.service';
import { SmartCarController } from './smartCar/smartCar.controller';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

const validationSchema = Joi.object({
  SERVER_PORT: Joi.number().default(5000),
  SMARTCAR_CLIENT_ID: Joi.string().uuid(),
  SMARTCAR_CLIENT_SECRET: Joi.string().uuid(),
  SMARTCAR_REDIRECT_URI: Joi.string().uri(),
  POSTGRES_DB: Joi.string(),
  POSTGRES_USER: Joi.string(),
  POSTGRES_PASSWORD: Joi.string(),
  POSTGRES_PRISMA_URL: Joi.string(),
});

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, SmartCarController, UsersController],
  providers: [SmartCarService, PrismaService, UsersService],
})
export class AppModule {}
