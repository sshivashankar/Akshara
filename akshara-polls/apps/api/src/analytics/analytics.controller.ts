import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Controller('api/analytics')
export class AnalyticsController {
  constructor(private prisma: PrismaService) {}
  @Get() summary() { return this.prisma.analyticsSnapshot.findMany({ take: 20, orderBy: { recordedAt: 'desc' } }); }
}
