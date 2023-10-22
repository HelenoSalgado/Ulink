import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/Service';
import { CreateLinkDto } from './dto/create-link-dto';
import { UpdateLinkDto } from './dto/update-link.dto';

@Injectable()
export class ShortenLinkRepository {
  constructor(private prisma: PrismaService) {}

  createLink(data: CreateLinkDto){
    return this.prisma.link.create({
      data,
      select: {
        id: true,
        idUrl: true,
        idUser: true,
        shortUrl: true,
        originUrl: true,
        title: true,
        description: true,
        urlImg: true,
        pixel: true
      }
    });
  }

  async findLink(id: string){
    return await this.prisma.link.findFirst({
      where: { id },
      select: {
        id: true,
        idUrl: true,
        idUser: true,
        originUrl: true,
        title: true,
        description: true,
        urlImg: true,
      }
    });
  }

  async findLinksUser(idUser: string){
    return await this.prisma.link.findMany({
      where: { idUser },
      select: {
        id: true,
        idUrl: true,
        idUser: true,
        originUrl: true,
        shortUrl: true,
        title: true,
        description: true,
        urlImg: true,
        pixel: true,
      },
      orderBy: {
        updatedAt: 'desc',
      }
    });
  };

  async findLinksRecents(idUser: string){
    return await this.prisma.link.findMany({
      where: { idUser },
      select: {
        id: true,
        idUrl: true,
        idUser: true,
        originUrl: true,
        shortUrl: true,
        title: true,
        description: true,
        urlImg: true,
        pixel: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
      take: 3
    });
  };

  async findLinks(){
    return await this.prisma.link.findMany({
      select: {
        id: true,
        idUrl: true,
        idUser: true,
        originUrl: true,
        shortUrl: true,
        title: true,
        description: true,
        urlImg: true,
        pixel: true,
      },
    });
  };

  async updateLink(id: string, data: UpdateLinkDto){
    return await this.prisma.link.update({
      where: { id },
      data,
      select: {
        id: true,
        idUrl: true,
        idUser: true,
        shortUrl: true,
        originUrl: true,
        title: true,
        description: true,
        urlImg: true,
        pixel: true,
      }
    });
  };

  async deleteLink(id: string){
    await this.prisma.link.delete({
      where: { id },
    });
  };
  
}