import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { EventsController } from './events/events.controller';
import { PollsController } from './polls/polls.controller';
import { QaController } from './qa/qa.controller';
import { AttendanceController } from './attendance/attendance.controller';
import { AnalyticsController } from './analytics/analytics.controller';
import { RealtimeGateway } from './realtime/realtime.gateway';
import { ExportsController } from './exports/exports.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ThrottlerModule.forRoot([{ ttl: 60000, limit: 120 }]), AuthModule],
  controllers: [EventsController, PollsController, QaController, AttendanceController, AnalyticsController, ExportsController],
  providers: [PrismaService, RealtimeGateway, { provide: APP_GUARD, useClass: ThrottlerGuard }]
})
export class AppModule {}
