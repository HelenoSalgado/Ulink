import { Inject, Injectable } from '@nestjs/common';
import { AnalyticsRepository } from './IRepository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ReqHeaderAnalytics } from 'src/constants/modelAnalytics';
import geoip from 'fast-geoip';

interface AnalyticUrl {
    clicks: number;
    analytics: ReqHeaderAnalytics;
}

@Injectable()
export class AnalyticsService {

    constructor(
        private readonly repo: AnalyticsRepository,
        @Inject(CACHE_MANAGER) private cache: Cache
    ) { }

    async findAnalyticsUrl(idUrl: string) {
        return await this.repo.findAnalyticsUrl(idUrl);
    }

    async findAnalyticsUrls(idUser: string) {
        return await this.repo.findAnalyticsUrls(idUser);
    }

    async analytics(headers: any) {

        const { ip, id_analytic, referrer } = headers;

        const id = id_analytic;

        console.log(ip);

        const {
            country,
            region,
            city,
            ll,
            timezone,
        } = await geoip.lookup(ip);

        const data = {
            ip,
            referrer,
            city,
            region,
            country,
            code_postal: null,
            lat: ll[0],
            lon: ll[1],
            timezone,
        }


        console.log('data: ' + data);

        const clicksInCache: number = await this.cache.get(id)
        console.log(clicksInCache);

        if (!clicksInCache) {
            const { clicks } = await this.repo.findAnalyticsUrl(id);
            await this.cache.set(id, clicks, 0);
            await this.repo.updateAnalytics(
                id,
                clicks + 1,
                data
            );
            console.log(clicks);
            return;
        }

        await this.repo.updateAnalytics(
            id,
            clicksInCache + 1,
            data
        );

    }

}