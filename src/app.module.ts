import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from "./health/health.module";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { CronService } from "./cron.service";

@Module({
  imports: [
    HealthModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })
  ],
  controllers: [AppController],
  providers: [AppService, CronService],
})
export class AppModule {}
