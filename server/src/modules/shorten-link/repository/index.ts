import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLinkDto } from '../dto/create-link-dto';

@Injectable()
export class ShortenLinkRepository {
  constructor(private prisma: PrismaService) {}

  create(data: CreateLinkDto){
    return this.prisma.link.create({
      data,
      select: {
        id: true,
        idUrl: true,
        shortUrl: true,
        originUrl: true,
        title: true,
        description: true,
        urlImg: true,
        pixel: true
      }
    });
  }

  async findOneUrl(idUrl: string){
    return await this.prisma.link.findFirst({
      where: { idUrl },
      select: {
        id: true,
        idUrl: true,
        originUrl: true,
        title: true,
        description: true,
        urlImg: true,
      }
    });
  }

  async findOneAnalytics(id: string){
    return await this.prisma.linkAnalytics.findFirst({
     where: { id },
     select: {
      analytics: true,
     }
    });
  }

  async findAllUrls(){
    return await this.prisma.link.findMany({
      select: {
        id: true,
        idUrl: true,
        originUrl: true,
        shortUrl: true,
        title: true,
        description: true,
        urlImg: true,
        pixel: true,
      }
    });
  }
  async createAnalytics(id: string, analytics){
    await this.prisma.linkAnalytics.create({
      data: {
        id,
        analytics,
      }
    });
  }
  async updateAnalytics(id: string, analytics){
    await this.prisma.linkAnalytics.update({
      where: { id },
      data: { analytics },
    });
  }
}