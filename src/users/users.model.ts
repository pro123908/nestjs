import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export const UserSchema = new mongoose.Schema({
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
});

UserSchema.plugin(uniqueValidator);

export interface User extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  image: string;
}
