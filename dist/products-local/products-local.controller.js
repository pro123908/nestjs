"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const products_local_service_1 = require("./products-local.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    addProduct(title, description, price) {
        return this.productService.addProduct(title, description, price);
    }
    getProducts() {
        return this.productService.getProducts();
    }
    getProduct(prodId) {
        return this.productService.getProduct(prodId);
    }
    deleteProduct(prodId) {
        return this.productService.deleteProduct(prodId);
    }
    updateProduct(prodId, title, description, price) {
        return this.productService.updateProduct(prodId, title, description, price);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('title')),
    __param(1, common_1.Body('description')),
    __param(2, common_1.Body('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "addProduct", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProducts", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProduct", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('title')),
    __param(2, common_1.Body('description')),
    __param(3, common_1.Body('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateProduct", null);
ProductController = __decorate([
    common_1.Controller('productsLocal'),
    __metadata("design:paramtypes", [products_local_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=products-local.controller.js.map