import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): Promise<{
        id: string;
    }>;
    getProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    getProduct(prodId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): Promise<any>;
    deleteProduct(prodId: string): Promise<any>;
}
