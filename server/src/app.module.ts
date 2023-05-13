import { Module } from '@nestjs/common';
import { ShortenLinkController } from './modules/shorten-link/controller/shortenLink.controller';
import { ShortenLinkService } from './modules/shorten-link/service/shortenLink.service';
import { ShortenLinkModule } from './modules/shorten-link/app.module';
import { ShortenLinkRepository } from './modules/shorten-link/repository';
import { PrismaModule } from './prisma/prisma.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ 
    PrismaModule, 
    ShortenLinkModule,
    CacheModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ config ]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist/public/pages'),
    }),
  ],
  controllers: [ 
    ShortenLinkController,
],
  providers: [
    ShortenLinkService,
    ShortenLinkRepository,
  ],
})
export class AppModule {}