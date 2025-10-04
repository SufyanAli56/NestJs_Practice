import { Module } from '@nestjs/common';
import { CategroiesController } from './categroies.controller';
import { CategroiesService } from './categroies.service';

@Module({
  controllers: [CategroiesController],
  providers: [CategroiesService]
})
export class CategroiesModule {}
