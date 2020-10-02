import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.loginUser(username, password);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
    if (user && user.password === password) {
      //   const { password, ...result } = user;
      //   return result;
      return user;
    }

    return null;
  }

  async login(user) {
    const payload = { username: user.name, userId: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
