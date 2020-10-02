import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsRemoteController } from './products-remote.controller';
import { ProductSchema } from './products-remote.model';
import { ProductsRemoteService } from './products-remote.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductsRemoteController],
  providers: [ProductsRemoteService],
})
export class ProductsRemoteModule {}
