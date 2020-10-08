"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const products_local_model_1 = require("./products-local.model");
let ProductService = class ProductService {
    constructor() {
        this.products = [];
    }
    addProduct(title, desc, price) {
        const prodId = Math.random().toString();
        const newProduct = new products_local_model_1.Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return newProduct;
    }
    getProducts() {
        return [...this.products];
    }
    getProduct(id) {
        return this.findTheProduct(id)[0];
    }
    deleteProduct(id) {
        this.products.splice(this.findTheProduct(id)[1], 1);
        return [...this.products];
    }
    updateProduct(id, title, desc, price) {
        const [product, productIndex] = this.findTheProduct(id);
        let updatedProduct = Object.assign({}, product);
        if (title)
            updatedProduct.title = title;
        if (desc)
            updatedProduct.description = desc;
        if (price)
            updatedProduct.price = price;
        this.products[productIndex] = updatedProduct;
        return updatedProduct;
    }
    findTheProduct(productId) {
        const productIndex = this.products.findIndex(prod => prod.id === productId);
        const product = this.products[productIndex];
        if (!product)
            throw new common_1.NotFoundException('Product Not Found');
        return [product, productIndex];
    }
};
ProductService = __decorate([
    common_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=products-local.service.js.map