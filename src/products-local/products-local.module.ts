import { Module } from '@nestjs/common';
import { ProductController } from './products-local.controller';
import { ProductService } from './products-local.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductsModuleLocal {}
