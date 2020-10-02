import { Module } from '@nestjs/common';

import { ProductsRemoteController } from './products-remote.controller';
import { ProductsRemoteService } from './products-remote.service';

@Module({
  controllers: [ProductsRemoteController],
  providers: [ProductsRemoteService],
})
export class ProductsRemoteModule {}
