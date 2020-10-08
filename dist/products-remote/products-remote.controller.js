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
exports.ProductsRemoteController = void 0;
const common_1 = require("@nestjs/common");
const products_remote_service_1 = require("./products-remote.service");
let ProductsRemoteController = class ProductsRemoteController {
    constructor(productService) {
        this.productService = productService;
    }
    async addProduct(email, title, description) {
        return await this.productService.addProduct(email, title, description, 10);
    }
    async getProducts() {
        return await this.productService.getProducts();
    }
    async getProduct(prodId) {
        return await this.productService.getProduct(prodId);
    }
    async deleteProduct(prodId) {
        return await this.productService.deleteProduct(prodId);
    }
    async updateProduct(prodId, title, description) {
        return await this.productService.updateProduct(prodId, title, description, 10);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('email')),
    __param(1, common_1.Body('title')),
    __param(2, common_1.Body('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ProductsRemoteController.prototype, "addProduct", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsRemoteController.prototype, "getProducts", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsRemoteController.prototype, "getProduct", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsRemoteController.prototype, "deleteProduct", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('title')),
    __param(2, common_1.Body('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ProductsRemoteController.prototype, "updateProduct", null);
ProductsRemoteController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [products_remote_service_1.ProductsRemoteService])
], ProductsRemoteController);
exports.ProductsRemoteController = ProductsRemoteController;
//# sourceMappingURL=products-remote.controller.js.map