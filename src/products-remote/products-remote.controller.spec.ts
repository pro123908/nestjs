import { Test, TestingModule } from '@nestjs/testing';
import { ProductsRemoteController } from './products-remote.controller';

describe('ProductsRemoteController', () => {
  let controller: ProductsRemoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsRemoteController],
    }).compile();

    controller = module.get<ProductsRemoteController>(ProductsRemoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
