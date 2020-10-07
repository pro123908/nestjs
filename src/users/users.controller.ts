import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post()
  async registerUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('image') image: String,
  ) {
    return await this.userService.registerUser(name, email, password, image);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginUser(
    @Body('email') email: string,
    @Body('password') password: string,
    @Request() req,
  ) {
    // return await this.userService.loginUser(email, password);
    console.log('Login => ', req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  async dash(@Request() req) {
    return req.user;
  }
}
