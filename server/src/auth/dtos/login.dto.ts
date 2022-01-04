import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class LoginResponse {
  @IsUUID()
  token: string;
}
