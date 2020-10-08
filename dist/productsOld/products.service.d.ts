import { Product } from './products.model';
import { Model } from 'mongoose';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<string>;
    getProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    getProduct(productId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    updateProduct(productId: string, title: string, desc: string, price: number): Promise<void>;
    deleteProduct(productId: string): Promise<void>;
    private findProduct;
}
