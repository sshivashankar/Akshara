import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Controller('api/events')
export class EventsController {
  constructor(private prisma: PrismaService) {}
  @Get() list() { return this.prisma.event.findMany({ include: { sessions: true } }); }
  @Post() create(@Body() body: any) { return this.prisma.event.create({ data: body }); }
  @Get(':id') one(@Param('id') id: string) { return this.prisma.event.findUnique({ where: { id } }); }
}
