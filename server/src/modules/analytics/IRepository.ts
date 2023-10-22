import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/Service';

@Injectable()
export class AnalyticsRepository {
    constructor(private prisma: PrismaService) { }

    async findAnalyticsUrl(idUrl: string) {
        return await this.prisma.linkAnalytics.findFirst({
            where: { idUrl },
            select: {
                clicks: true,
                analytics: true,
            },
        });
    };

    async findAnalyticsUrls(idUser: string) {
        return await this.prisma.linkAnalytics.findMany({
            where: { idUser },
            select: {
                clicks: true,
                analytics: true,
            },
        });
    };

    async createAnalytics({ id, clicks, idUrl, idUser }) {
        await this.prisma.linkAnalytics.create({
            data: {
                id,
                idUrl,
                idUser,
                clicks,
            },
        });
    };
    async updateAnalytics(id: string, clicks: number, analytics) {
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