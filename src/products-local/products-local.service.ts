import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products-local.model';

@Injectable()
export class ProductService {
  products: Product[] = []; // Setting the default Value to []

  addProduct(title: string, desc: string, price: number): Product {
    // generating random Id
    const prodId = Math.random().toString();

    // Creating the product instance
    const newProduct = new Product(prodId, title, desc, price);

    // Adding the product to the array
    this.products.push(newProduct);

    // returning the newly created product
    return newProduct;
  }

  getProducts(): Product[] {
    // returning the copy of products array
    return [...this.products];
  }

  getProduct(id: string): Product {
    // returning the product with the given id
    return this.findTheProduct(id)[0];
  }

  deleteProduct(id: string) {
    // deleting the product with the given id
    this.products.splice(this.findTheProduct(id)[1], 1);

    // returning the updated products array
    return [...this.products];
  }

  updateProduct(id: string, title: string, desc: string, price: number) {
    // getting the product and its index
    const [product, productIndex] = this.findTheProduct(id);
    let updatedProduct = { ...product };

    // updating the only properties that are passed/updated
    if (title) updatedProduct.title = title;
    if (desc) updatedProduct.description = desc;
    if (price) updatedProduct.price = price;

    // updating the product in the products array
    this.products[productIndex] = updatedProduct;

    // returning the updatedProduct (not original)
    return updatedProduct;
  }

  findTheProduct(productId): [Product, number] {
    // returning the product and productIndex
    const productIndex = this.products.findIndex(prod => prod.id === productId);
    const product = this.products[productIndex];

    if (!product) throw new NotFoundException('Product Not Found');

    return [product, productIndex];
  }
}
