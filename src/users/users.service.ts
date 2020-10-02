import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async registerUser(name: string, email: string, password: string) {
    const newUser = new this.userModel({
      name,
      email,
      password,
    });

    const result = await newUser.save();

    return {
      name: result.name,
      email: result.email,
      password: result.password,
    };
  }

  async loginUser(email: string, password: string) {
    const user = await this.userModel.findOne({ email: email }).exec();
    console.log(user);

    // const result = await newUser.save();

    // return {
    //   name: result.name,
    //   email: result.email,
    //   password: result.password,
    // };
    return user;
  }
}
