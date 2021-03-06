import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ProductSchema } from 'src/products-remote/products-remote.model';
import { ProductsModule } from 'src/productsOld/products.module';
import { UsersController } from './users.controller';
import { UserSchema } from './users.model';
import { UsersService } from './users.service';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
