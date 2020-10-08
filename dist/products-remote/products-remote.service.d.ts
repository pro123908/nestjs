import { Model } from 'mongoose';
import { User } from 'src/users/users.model';
import { Product } from './products-remote.model';
export declare class ProductsRemoteService {
    private readonly productModel;
    private readonly userModel;
    constructor(productModel: Model<Product>, userModel: Model<User>);
    products: Product[];
    addProduct(email: string, title: string, description: string, price: number): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        userImage: string;
        name: string;
        date: string;
        email: string;
    }>;
    getProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        userImage: string;
        name: string;
        date: string;
        email: string;
    }[]>;
    getProduct(productId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    deleteProduct(productId: string): Promise<{
        productId: string;
    }>;
    updateProduct(productId: string, title: string, desc: string, price: number): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        userImage: string;
        name: string;
        date: string;
        email: string;
    }>;
    private findTheProduct;
}
