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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async registerUser(name, email, password, image) {
        const newUser = new this.userModel({
            name,
            email,
            password,
            image,
        });
        try {
            const result = await newUser.save();
            console.log(result);
            return {
                name: result.name,
                email: result.email,
                image: result.image,
            };
        }
        catch (error) {
            console.log(error);
            if (error.errors.email)
                console.log(error.errors.email.properties.type);
            if (error.errors.email.properties.type === 'unique') {
                throw new common_1.HttpException('Email Already Exists', common_1.HttpStatus.FORBIDDEN);
            }
        }
    }
    async loginUser(email, password) {
        try {
            const user = await this.userModel.findOne({ email: email }).exec();
            console.log('inside userServices', user);
            if (!user) {
                return null;
            }
            return user;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Invalid Email or Password', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map