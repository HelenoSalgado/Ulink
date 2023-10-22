import { Module } from '@nestjs/common';
import { PrismaService } from './Service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}