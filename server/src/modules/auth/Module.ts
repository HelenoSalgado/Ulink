import { Module } from '@nestjs/common';
import { AuthService } from './Service';
import { JwtModule } from '@nestjs/jwt';
import config from 'src/config';
import { UserModule } from '../user/Module';
import { AuthController } from './Controller';
import { AuthGuard } from './Guard';
import { APP_GUARD } from '@nestjs/core';
import { UserRepository } from '../user/IRepository';
import { PrismaModule } from 'src/prisma/Module';

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