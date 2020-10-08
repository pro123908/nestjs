import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';

import { ProductsRemoteController } from './products-remote.controller';
import { ProductSchema } from './products-remote.model';
import { ProductsRemoteService } from './products-remote.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    UsersModule,
  ],
  controllers: [ProductsRemoteController],
  providers: [ProductsRemoteService],
})
export class ProductsRemoteModule {}
