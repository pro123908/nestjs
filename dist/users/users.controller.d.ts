import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    private authService;
    constructor(userService: UsersService, authService: AuthService);
    registerUser(name: string, email: string, password: string, image: String): Promise<{
        name: string;
        email: string;
        image: string;
    }>;
    loginUser(email: string, password: string, req: any): Promise<{
        accessToken: string;
        email: any;
        name: any;
        image: any;
    }>;
    dash(req: any): Promise<any>;
}
