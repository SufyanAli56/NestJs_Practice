import { Test, TestingModule } from '@nestjs/testing';
import { CategroiesService } from './categroies.service';

describe('CategroiesService', () => {
  let service: CategroiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategroiesService],
    }).compile();

    service = module.get<CategroiesService>(CategroiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
