import { ProductsRemoteService } from './products-remote.service';
export declare class ProductsRemoteController {
    private readonly productService;
    constructor(productService: ProductsRemoteService);
    addProduct(email: string, title: string, description: string): Promise<{
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
    getProduct(prodId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    deleteProduct(prodId: string): Promise<{
        productId: string;
    }>;
    updateProduct(prodId: string, title: string, description: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        userImage: string;
        name: string;
        date: string;
        email: string;
    }>;
}
