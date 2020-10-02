import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import { Model } from 'mongoose';
import { Product } from './products-remote.model';

@Injectable()
export class ProductsRemoteService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}
  products: Product[] = []; // Setting the default Value to []

  async addProduct(title: string, description: string, price: number) {
    // Creating the product using schema
    const newProduct = new this.productModel({
      title,
      description,
      price,
    });

    const result = await newProduct.save();
    return {
      id: result.id,
      title: result.title,
      description: result.description,
      price: result.price,
    };
  }

  async getProducts() {
    // returning the copy of products array
    const products = await this.productModel.find().exec();
    return products.map(prod => ({
      id: prod.id,
      title: prod.title,
      description: prod.title,
      price: prod.price,
    }));
  }

  async getProduct(productId: string) {
    // returning the product with the given id
    const { id, title, description, price } = await this.findTheProduct(
      productId,
    );
    return {
      id,
      title,
      description,
      price,
    };
  }

  async deleteProduct(productId: string) {
    // deleting the product with the given id
    const result = await this.productModel.deleteOne({ _id: productId }).exec();

    if (result.n === 0) throw new NotFoundException('Product Not Found');

    return await this.getProducts();
  }

  async updateProduct(
    productId: string,
    title: string,
    desc: string,
    price: number,
  ) {
    let updatedProduct = await this.findTheProduct(productId);

    if (title) updatedProduct.title = title;
    if (desc) updatedProduct.description = desc;
    if (price) updatedProduct.price = price;

    updatedProduct.save();

    return updatedProduct;
  }

  private async findTheProduct(productId): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(productId);
    } catch (err) {
      throw new NotFoundException('Error finding the product');
    }

    if (!product) throw new NotFoundException('Product not found');

    return product;
  }
}
