import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Controller('api/attendance')
export class AttendanceController {
  constructor(private prisma: PrismaService) {}
  @Get() list() { return this.prisma.attendance.findMany(); }
  @Post() create(@Body() body: any) { return this.prisma.attendance.create({ data: body }); }
}
