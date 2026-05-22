import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Controller('api/polls')
export class PollsController {
  constructor(private prisma: PrismaService) {}
  @Get() list() { return this.prisma.poll.findMany({ include: { options: true } }); }
  @Post() create(@Body() body: any) { return this.prisma.poll.create({ data: body }); }
  @Get(':id') one(@Param('id') id: string) { return this.prisma.poll.findUnique({ where: { id } }); }
}
