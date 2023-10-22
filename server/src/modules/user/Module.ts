import { Module } from '@nestjs/common';
import { UserController } from './Controller';
import { UserService } from './Service';
import { UserRepository } from './IRepository';
import { PrismaModule } from 'src/prisma/Module';

@Module({
  imports: [ PrismaModule ],
  controllers: [ UserController ],
  providers: [ UserService, UserRepository  ],
})
export class UserModule {}
