import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Controller('api/qa')
export class QaController {
  constructor(private prisma: PrismaService) {}
  @Get() list() { return this.prisma.question.findMany(); }
  @Post() create(@Body() body: any) { return this.prisma.question.create({ data: body }); }
}
