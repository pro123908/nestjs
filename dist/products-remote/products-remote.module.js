"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRemoteModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_model_1 = require("../users/users.model");
const users_module_1 = require("../users/users.module");
const products_remote_controller_1 = require("./products-remote.controller");
const products_remote_model_1 = require("./products-remote.model");
const products_remote_service_1 = require("./products-remote.service");
let ProductsRemoteModule = class ProductsRemoteModule {
};
ProductsRemoteModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Product', schema: products_remote_model_1.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: users_model_1.UserSchema }]),
            users_module_1.UsersModule,
        ],
        controllers: [products_remote_controller_1.ProductsRemoteController],
        providers: [products_remote_service_1.ProductsRemoteService],
    })
], ProductsRemoteModule);
exports.ProductsRemoteModule = ProductsRemoteModule;
//# sourceMappingURL=products-remote.module.js.map