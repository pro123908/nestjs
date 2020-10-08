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
exports.ProductsRemoteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_model_1 = require("../users/users.model");
let ProductsRemoteService = class ProductsRemoteService {
    constructor(productModel, userModel) {
        this.productModel = productModel;
        this.userModel = userModel;
        this.products = [];
    }
    async addProduct(email, title, description, price) {
        const newProduct = new this.productModel({
            email,
            title,
            description,
            price,
        });
        console.log('Email => ', email);
        const result = await newProduct.save();
        console.log('Result -> ', result);
        const user = await this.userModel.findOne({ email: email });
        console.log('--- user ---', user);
        if (user) {
            await user.products.push(newProduct);
            await user.save();
            return {
                id: result.id,
                title: result.title,
                description: result.description,
                price: result.price,
                userImage: user.image,
                name: user.name,
                date: result.date,
                email: user.email,
            };
        }
    }
    async getProducts() {
        const products = await this.productModel.find().exec();
        console.log('Products => ', products);
        const productsWithUser = await Promise.all(products.map(async (prod) => {
            const user = await this.userModel.findOne({ email: prod.email });
            console.log('User? ? ', user);
            if (user) {
                console.log('iside ');
                return {
                    id: prod.id,
                    title: prod.title,
                    description: prod.description,
                    price: prod.price,
                    userImage: user.image,
                    name: user.name,
                    date: prod.date,
                    email: user.email,
                };
            }
        }));
        return productsWithUser;
    }
    async getProduct(productId) {
        const { id, title, description, price } = await this.findTheProduct(productId);
        return {
            id,
            title,
            description,
            price,
        };
    }
    async deleteProduct(productId) {
        try {
            const result = await this.productModel
                .deleteOne({ _id: productId })
                .exec();
            if (result.n === 0)
                throw new common_1.NotFoundException('Product Not Found');
            console.log(result);
            return { productId };
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateProduct(productId, title, desc, price) {
        let updatedProduct = await this.findTheProduct(productId);
        if (title)
            updatedProduct.title = title;
        if (desc)
            updatedProduct.description = desc;
        if (price)
            updatedProduct.price = price;
        await updatedProduct.save();
        const user = await this.userModel.findOne({ email: updatedProduct.email });
        if (user) {
            return {
                id: updatedProduct.id,
                title: updatedProduct.title,
                description: updatedProduct.description,
                price: updatedProduct.price,
                userImage: user.image,
                name: user.name,
                date: updatedProduct.date,
                email: user.email,
            };
        }
    }
    async findTheProduct(productId) {
        let product;
        try {
            product = await this.productModel.findById(productId);
        }
        catch (err) {
            throw new common_1.NotFoundException('Error finding the product');
        }
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
};
ProductsRemoteService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Product')),
    __param(1, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ProductsRemoteService);
exports.ProductsRemoteService = ProductsRemoteService;
//# sourceMappingURL=products-remote.service.js.map