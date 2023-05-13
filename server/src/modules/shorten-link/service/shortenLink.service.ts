import { BadRequestException, Controller, Inject } from '@nestjs/common';
import { ShortenLinkRepository } from '../repository';
import ShortUniqueId from 'short-unique-id';
import { isURL } from 'class-validator';
import { CreateLinkDto } from '../dto/create-link-dto';
import { ObjectId } from 'bson'
import { Request } from 'express';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { modelAnalytics } from 'src/constants/modelAnalytics';
import config from 'src/config';
import { analyticRequest } from '../utils/analyticRequest';
import createPreview from '../utils/createPreview';

type AnalyticUrl = Omit<Partial<CreateLinkDto>, 
'urlId' | 
'shortUrl' |
'device'
>;

interface Analytics {
  name: string;
  value: number;
}

@Controller()
export class ShortenLinkService {

  constructor(
    private readonly repo: ShortenLinkRepository,
    @Inject(CACHE_MANAGER) private cache: Cache
    ) {}

  async shortenUrl(dataUrl: CreateLinkDto) {

    if(!isURL(dataUrl.originUrl)) {
      throw new BadRequestException('URL não é válida.')
    }

    const id = new ShortUniqueId();
    const uniqueId = id(5);

    dataUrl.id = new ObjectId().toString();
    dataUrl.idUrl = uniqueId;

    const baseHost = config().localhost+':'+config().port.toString()+'/';
    dataUrl.shortUrl = baseHost+uniqueId;

    await this.repo.createAnalytics(dataUrl.id, modelAnalytics);

    const dataLink = await this.repo.create(dataUrl);

    await createPreview(dataLink);

    return dataLink;

  }

  async redirectUrl(idUrl: string, req: Request){

    const url = await this.repo.findOneUrl(idUrl);

    const nameCacheAnalytics = `'analyticUrl${idUrl}'`;
    const idAnalytics = url.id;

    const analyticsInCache = await this.cache.get(nameCacheAnalytics);

    if(analyticsInCache){
      this.analyticsUrl( idAnalytics, nameCacheAnalytics, analyticsInCache, req);
    }else{
      const analyticsInDb = (await this.repo.findOneAnalytics(idAnalytics)).analytics;
      await this.cache.set(nameCacheAnalytics, analyticsInDb, 0);
      await this.analyticsUrl(idAnalytics, nameCacheAnalytics, analyticsInDb, req);
    }

    return url.originUrl;
  }

  async analyticsUrl(idAnalytics, nameCacheAnalytics, valuesAnalytics, req: Request){

    console.table(valuesAnalytics[0].so)

    const dataAnalytics = await analyticRequest(valuesAnalytics, req);

    await this.cache.set(nameCacheAnalytics, dataAnalytics, 0);

    await this.repo.updateAnalytics(idAnalytics, dataAnalytics);
    

  }

  async generatePreviews(){

    const previews = await this.repo.findAllUrls();

    previews.forEach(async(head) => {
      await createPreview(head);
    })

    return {message: 'Prévias geradas com sucesso'};
    
  }

}