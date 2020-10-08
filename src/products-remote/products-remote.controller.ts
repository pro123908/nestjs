import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsRemoteService } from './products-remote.service';

@Controller('products')
export class ProductsRemoteController {
  // to use productService, make the constructor
  constructor(private readonly productService: ProductsRemoteService) {}

  // Add a product
  @Post()
  async addProduct(
    @Body('email') email: string,
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return await this.productService.addProduct(email, title, description, 10);
  }

  // Get all products
  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  // Get a single product
  @Get(':id')
  async getProduct(@Param('id') prodId: string) {
    return await this.productService.getProduct(prodId);
  }

  // Delete a product
  @Delete(':id')
  async deleteProduct(@Param('id') prodId: string) {
    return await this.productService.deleteProduct(prodId);
  }

  // Updates a product
  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') title: string,
    @Body('description') description: string,
    // @Body('price') price: number,
  ) {
    return await this.productService.updateProduct(
      prodId,
      title,
      description,
      10,
    );
  }
}
