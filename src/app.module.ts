import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsController } from './cats/cats.controller';
import { ProductsModuleLocal } from './products-local/products-local.module';
import { ProductsRemoteModule } from './products-remote/products-remote.module';

@Module({
  // imports: [
  //   ProductsModule,
  //   MongooseModule.forRoot(
  //     'mongodb+srv://bilal:home123@cluster0.5ogp4.mongodb.net/nestjs-demo?retryWrites=true&w=majority',
  //   ),
  // ],
  imports: [ProductsModuleLocal, ProductsRemoteModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
