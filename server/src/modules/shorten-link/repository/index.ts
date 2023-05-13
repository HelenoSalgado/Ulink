import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ShortenLinkRepository {
  constructor(private prisma: PrismaService) {}

  create(data){
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

  async findAll(){
    return await this.prisma.link.findMany({
      select: {
        idUrl: true,
        originUrl: true,
        title: true,
        description: true,
        urlImg: true,
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