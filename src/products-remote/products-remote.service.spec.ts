import { Test, TestingModule } from '@nestjs/testing';
import { ProductsRemoteService } from './products-remote.service';

describe('ProductsRemoteService', () => {
  let service: ProductsRemoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsRemoteService],
    }).compile();

    service = module.get<ProductsRemoteService>(ProductsRemoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
