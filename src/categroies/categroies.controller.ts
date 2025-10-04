import { Controller, Get } from '@nestjs/common';
import { CategroiesService } from './categroies.service';

@Controller('categroies')
export class CategroiesController {
  constructor(private readonly categroiesService: CategroiesService) {}

  @Get()
  getAllCategrioes() {
        return this.categroiesService.getCategrios()
  }
}
