import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLinkDto } from '../dto/create-link-dto';
import { ReqHeaderAnalytics } from 'src/constants/modelAnalytics';

@Injectable()
export class ShortenLinkRepository {
  constructor(private prisma: PrismaService) {}

  create(data: CreateLinkDto){
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

  async findOneUrl(idUrl: string){
    return await this.prisma.link.findFirst({
      where: { idUrl },
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

  async findOneAnalytics(id: string){
    return await this.prisma.linkAnalytics.findFirst({
     where: { id },
     select: {
        clicks: true,
        analytics: true,
     }
    });
  }

  async findAllUrls(){
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
      }
    });
  }
  async createAnalytics(id: string, clicks: number){
    await this.prisma.linkAnalytics.create({
      data: {
        id,
        clicks
      }
    });
  }
  async updateAnalytics(id: string, clicks: number, analytics){
    await this.prisma.linkAnalytics.update({
      where: { id },
      data: {
        clicks,
        analytics: {
          push: analytics
        }
      }
    });
  }
}