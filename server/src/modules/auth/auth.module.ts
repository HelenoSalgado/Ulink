import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import config from 'src/config';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { UserRepository } from '../user/repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: config.secretUser,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  providers: [
    AuthService, {
       provide: APP_GUARD,
       useClass: AuthGuard,
    },
    UserRepository,
],
  controllers: [AuthController],
  exports: [
    AuthService,
  ],
})
export class AuthModule {}