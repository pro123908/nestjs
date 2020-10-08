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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const local_auth_guard_1 = require("../auth/local-auth.guard");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async registerUser(name, email, password, image) {
        return await this.userService.registerUser(name, email, password, image);
    }
    async loginUser(email, password, req) {
        console.log('inside userController');
        return this.authService.login(req.user);
    }
    async dash(req) {
        return req.user;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('name')),
    __param(1, common_1.Body('email')),
    __param(2, common_1.Body('password')),
    __param(3, common_1.Body('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "registerUser", null);
__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('login'),
    __param(0, common_1.Body('email')),
    __param(1, common_1.Body('password')),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loginUser", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('protected'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "dash", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map