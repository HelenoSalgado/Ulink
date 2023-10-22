import { Module } from '@nestjs/common';
import { ShortenLinkController } from './Controller';
import { ShortenLinkService } from './Service';
import { ShortenLinkRepository } from './IRepository';
import { PrismaModule } from 'src/prisma/Module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [ PrismaModule, CacheModule.register() ],
  controllers: [ ShortenLinkController ],
  providers: [ ShortenLinkService, ShortenLinkRepository  ],
})
export class ShortenLinkModule {}
