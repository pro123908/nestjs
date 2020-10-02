import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModuleLocal } from './products-local/products-local.module';
import { ProductsRemoteModule } from './products-remote/products-remote.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModuleLocal,
    ProductsRemoteModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://bilal:home123@cluster0.5ogp4.mongodb.net/nestjs-demo?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
