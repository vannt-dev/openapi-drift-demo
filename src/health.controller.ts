import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  // drift 2: served, not in openapi.yaml
  @Get('health')
  health() {
    return { ok: true };
  }
}
