import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any>;
export interface User extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    image: string;
    products: any;
}
