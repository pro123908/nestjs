import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    console.log('inside localStrategy');
    if (!user) {
      // throw new UnauthorizedException('Invalid email or password');
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

      // return { message: 'Invalid email or password' };
    } else if (!user.user) {
      throw new HttpException(
        'Invalid Email or Password',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user.user;
  }
}
