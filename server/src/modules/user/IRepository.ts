import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/Service';
import type { UpdateUserDto } from './dto/update-user-dto';
import type { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto){
    return this.prisma.user.create({
      data,
      select: {
        id: true,
      }
    });
  }

  async findOneAuthentication(email: string){
    return this.prisma.user.findFirst({
      where: { email },
      select: {
        id: true,
        username: true,
        firstName: true,
        password: true,
        role: true,
      },
    });
  }

  async findOne(id: string){
    return this.prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        email: true,
      }
    });
  }

  async update(id: string, data: UpdateUserDto){
    return this.prisma.user.update({
     where: { id },
     data,
    });
  }

  async delete(id: string){
    await this.prisma.user.delete({
      where: { id }
    });
  }

  async findAll(){
    return this.prisma.user.findMany({
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        email: true,
      }
    });
  }

}