import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from 'src/auth/dtos/login.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() command: LoginDto) {
    const user = await this.authService.validateUser(
      command.email,
      command.password,
    );
    return this.authService.login(user);
  }
}
