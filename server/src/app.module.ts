import { Module } from '@nestjs/common';
import { ShortenLinkController } from './modules/shorten-link/Controller';
import { ShortenLinkService } from './modules/shorten-link/Service';
import { ShortenLinkModule } from './modules/shorten-link/Module';
import { ShortenLinkRepository } from './modules/shorten-link/IRepository';
import { PrismaModule } from './prisma/Module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserService } from './modules/user/Service';
import { UserRepository } from './modules/user/IRepository';
import { UserModule } from './modules/user/Module';
import { UserController } from './modules/user/Controller';
import { AuthModule } from './modules/auth/Module';
import { AuthController } from './modules/auth/Controller';
import { AuthService } from './modules/auth/Service';
import { AuthGuard } from './modules/auth/Guard';

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