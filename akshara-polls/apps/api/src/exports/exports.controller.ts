import { Controller, Get } from '@nestjs/common';
@Controller('api/exports')
export class ExportsController {
  @Get('health') health() { return { pdf: true, excel: true, ppt: true }; }
}
