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
import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/controller/user.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { AuthGuard } from './modules/auth/auth.guard';

@Module({
  imports: [ 
    AuthModule,
    PrismaModule, 
    ShortenLinkModule,
    UserModule,
    CacheModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ () => { return config } ]
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
    AuthController,
    ShortenLinkController,
    UserController,
],
  providers: [
    AuthService,
    ShortenLinkService,
    ShortenLinkRepository,
    UserService,
    UserRepository
  ],
})
export class AppModule {}