import { Model } from 'mongoose';
import { User } from './users.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    registerUser(name: string, email: string, password: string, image: String): Promise<{
        name: string;
        email: string;
        image: string;
    }>;
    loginUser(email: string, password: string): Promise<User>;
}
