import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './products-local.service';

@Controller('productsLocal')
export class ProductController {
  // to use productService, make the constructor
  constructor(private readonly productService: ProductService) {}

  // Add a product
  @Post()
  addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    return this.productService.addProduct(title, description, price);
  }

  // Get all products
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  // Get a single product
  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getProduct(prodId);
  }

  // Delete a product
  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    return this.productService.deleteProduct(prodId);
  }

  // Updates a product
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    return this.productService.updateProduct(prodId, title, description, price);
  }
}
