"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
exports.UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});
exports.UserSchema.plugin(uniqueValidator);
//# sourceMappingURL=users.model.js.map