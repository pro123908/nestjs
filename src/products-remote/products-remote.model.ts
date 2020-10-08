import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: new Date(),
  },
});

export interface Product extends mongoose.Document {
  email: string;
  id: string;
  title: string;
  description: string;
  price: number;
  date: string;
}
