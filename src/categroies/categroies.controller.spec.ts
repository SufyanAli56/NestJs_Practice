import { Test, TestingModule } from '@nestjs/testing';
import { CategroiesController } from './categroies.controller';

describe('CategroiesController', () => {
  let controller: CategroiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategroiesController],
    }).compile();

    controller = module.get<CategroiesController>(CategroiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
