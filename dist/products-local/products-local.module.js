"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModuleLocal = void 0;
const common_1 = require("@nestjs/common");
const products_local_controller_1 = require("./products-local.controller");
const products_local_service_1 = require("./products-local.service");
let ProductsModuleLocal = class ProductsModuleLocal {
};
ProductsModuleLocal = __decorate([
    common_1.Module({
        controllers: [products_local_controller_1.ProductController],
        providers: [products_local_service_1.ProductService],
    })
], ProductsModuleLocal);
exports.ProductsModuleLocal = ProductsModuleLocal;
//# sourceMappingURL=products-local.module.js.map