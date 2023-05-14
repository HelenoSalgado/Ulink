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
import { UserService } from './modules/user/service/user.service';
import { UserRepository } from './modules/user/repository';
import { UserModule } from './modules/user/app.module';
import { UserController } from './modules/user/controller/user.controller';

@Module({
  imports: [ 
    PrismaModule, 
    ShortenLinkModule,
    UserModule,
    CacheModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ config ]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist/public/pages'),
      exclude: ['/api/(.*)'],
      serveStaticOptions: {
        cacheControl: true,
      }
    }),
  ],
  controllers: [ 
    ShortenLinkController,
    UserController,
],
  providers: [
    ShortenLinkService,
    ShortenLinkRepository,
    UserService,
    UserRepository
  ],
})
export class AppModule {}