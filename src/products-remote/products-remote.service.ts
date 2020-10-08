import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { User } from 'src/users/users.model';
import { Product } from './products-remote.model';

@Injectable()
export class ProductsRemoteService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}
  products: Product[] = []; // Setting the default Value to []

  async addProduct(
    email: string,
    title: string,
    description: string,
    price: number,
  ) {
    // Creating the product using schema
    const newProduct = new this.productModel({
      email,
      title,
      description,
      price,
    });

    console.log('Email => ', email);

    const result = await newProduct.save();
    console.log('Result -> ', result);
    const user = await this.userModel.findOne({ email: email });
    console.log('--- user ---', user);
    if (user) {
      await user.products.push(newProduct);
      await user.save();

      return {
        id: result.id,
        title: result.title,
        description: result.description,
        price: result.price,
        userImage: user.image,
      };
    }

    // return ;
  }

  async getProducts() {
    // returning the copy of products array
    const products = await this.productModel.find().exec();
    console.log('Products => ', products);
    const productsWithUser = await Promise.all(
      products.map(async prod => {
        const user = await this.userModel.findOne({ email: prod.email });
        console.log('User? ? ', user);
        // return {
        //   id: prod.id,
        //   title: prod.title,
        //   description: prod.description,
        //   price: prod.price,
        // };
        if (user) {
          console.log('iside ');
          return {
            id: prod.id,
            title: prod.title,
            description: prod.description,
            price: prod.price,
            userImage: user.image,
          };
        }
      }),
    );

    return productsWithUser;
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

    try {
      const result = await this.productModel
        .deleteOne({ _id: productId })
        .exec();
      if (result.n === 0) throw new NotFoundException('Product Not Found');
      console.log(result);

      return { productId };
    } catch (error) {
      console.log(error);
    }
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

    await updatedProduct.save();

    const user = await this.userModel.findOne({ email: updatedProduct.email });
    if (user) {
      return {
        id: updatedProduct.id,
        title: updatedProduct.title,
        description: updatedProduct.description,
        price: updatedProduct.price,
        userImage: user.image,
      };
    }
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
