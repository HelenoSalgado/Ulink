import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLinkDto } from '../dto/create-link-dto';
import { UpdateLinkDto } from '../dto/update-link.dto';

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

  async findLink(idUrl: string){
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

  async findLinksUser(idUser: string){
    return await this.prisma.link.findMany({
      where: { idUser },
      select: {
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

  async findAnalyticsUrl(idUrl: string){
    return await this.prisma.linkAnalytics.findFirst({
     where: { idUrl },
     select: {
        clicks: true,
        analytics: true,
     },
    });
  };

  async findAnalyticsUrls(idUser: string){
    return await this.prisma.linkAnalytics.findMany({
     where: { idUser },
     select: {
        clicks: true,
        analytics: true,
     },
    });
  };

  async createAnalytics({ id, clicks, idUrl, idUser }){
    await this.prisma.linkAnalytics.create({
      data: {
        id,
        idUrl,
        idUser,
        clicks,
      },
    });
  };
  async updateAnalytics(id: string, clicks: number, analytics){
    await this.prisma.linkAnalytics.update({
      where: { id },
      data: {
        clicks,
        analytics: {
          push: analytics
        },
      },
    });
  };
}