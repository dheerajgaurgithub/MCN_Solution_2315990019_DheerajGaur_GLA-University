import { Controller, Get } from '@nestjs/common';
import { StreaksService } from './streaks.service';

@Controller('streaks')
export class StreaksController {
  constructor(private service: StreaksService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }
}
