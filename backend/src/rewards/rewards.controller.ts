import { Controller, Get } from '@nestjs/common';
import { RewardsService } from './rewards.service';

@Controller('rewards')
export class RewardsController {
  constructor(private service: RewardsService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }
}
