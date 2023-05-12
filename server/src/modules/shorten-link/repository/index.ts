import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ShortenLinkRepository {
  constructor(private prisma: PrismaService) {}

  create(data){
    return this.prisma.link.create({
      data,
      select: {
        shortUrl: true,
      }
    });
  }

  async findOneUrl(idUrl: string){
    return await this.prisma.link.findFirst({
      where: { idUrl },
      select: {
        id: true,
        originUrl: true,
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
        originUrl: true,
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