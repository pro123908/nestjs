import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async registerUser(
    name: string,
    email: string,
    password: string,
    image: String,
  ) {
    const newUser = new this.userModel({
      name,
      email,
      password,
      image,
    });

    try {
      const result = await newUser.save();
      console.log(result);
      return {
        name: result.name,
        email: result.email,
        image: result.image,
      };
    } catch (error) {
      console.log(error);
      if (error.errors.email) console.log(error.errors.email.properties.type);
      if (error.errors.email.properties.type === 'unique') {
        throw new HttpException('Email Already Exists', HttpStatus.FORBIDDEN);
      }
    }
  }

  async loginUser(email: string, password: string) {
    try {
      // const user = await this.userModel
      //   .findOne({ email: email })
      //   .populate('products')
      //   .exec();

      const user = await this.userModel.findOne({ email: email }).exec();

      console.log('inside userServices', user);
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Invalid Email or Password',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
