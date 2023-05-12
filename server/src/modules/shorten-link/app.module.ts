import { Module } from '@nestjs/common';
import { ShortenLinkController } from './controller/shortenLink.controller';
import { ShortenLinkService } from './service/shortenLink.service';
import { ShortenLinkRepository } from './repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [ PrismaModule, CacheModule.register() ],
  controllers: [ ShortenLinkController ],
  providers: [ ShortenLinkService, ShortenLinkRepository  ],
})
export class ShortenLinkModule {}
