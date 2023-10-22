import { Module } from '@nestjs/common';
import { AnalyticsController } from './Controller';
import { AnalyticsService } from './Service';
import { AnalyticsRepository } from './IRepository';
import { PrismaModule } from 'src/prisma/Module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [PrismaModule, CacheModule.register()],
    controllers: [AnalyticsController],
    providers: [AnalyticsService, AnalyticsRepository],
})
export class AnalyticsModule { }