import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any>;
export interface Product extends mongoose.Document {
    email: string;
    id: string;
    title: string;
    description: string;
    price: number;
    date: string;
}
