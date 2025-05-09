/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('login')
export class LoginController {
  constructor(private readonly usersService: UsersService) {}
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.usersService.login(body.email, body.password);
  }
}
