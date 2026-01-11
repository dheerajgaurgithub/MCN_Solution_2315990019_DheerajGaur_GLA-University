import { Controller, Get } from '@nestjs/common';
import { ChallengesService } from './challenges.service';

@Controller('challenges')
export class ChallengesController {
  constructor(private service: ChallengesService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }
}
