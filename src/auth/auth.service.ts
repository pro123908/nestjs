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
    console.log('inside auth.service', username, password);
    const user = await this.usersService.loginUser(username, password);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
    if (user && user.password === password) {
      //   const { password, ...result } = user;
      //   return result;
      return { user: user };
    }
    if (user && user.password !== password)
      return { user: null, message: 'Invalid Email or Password' };

    return null;
  }

  async login(user) {
    const payload = { username: user.name, userId: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      email: user.email,
      name: user.name,
      image: user.image,
    };
  }
}
