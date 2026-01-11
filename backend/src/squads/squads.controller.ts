import { Controller, Get } from '@nestjs/common';
import { SquadsService } from './squads.service';

@Controller('squads')
export class SquadsController {
  constructor(private service: SquadsService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }
}
