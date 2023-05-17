import { BadRequestException, ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { ShortenLinkRepository } from '../repository';
import ShortUniqueId from 'short-unique-id';
import { isURL } from 'class-validator';
import { CreateLinkDto } from '../dto/create-link-dto';
import { ObjectId } from 'bson'
import { Request } from 'express';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ReqHeaderAnalytics } from 'src/constants/modelAnalytics';
import config from 'src/config';
import createPreview from '../utils/createPreview';
const geoip = require('fast-geoip');

interface AnalyticUrl{
  clicks: number;
  analytics: ReqHeaderAnalytics;
}

@Injectable()
export class ShortenLinkService {

  constructor(
    private readonly repo: ShortenLinkRepository,
    @Inject(CACHE_MANAGER) private cache: Cache
    ) {}

  async shortenUrl(dataUrl: CreateLinkDto) {

    if(!isURL(dataUrl.originUrl)) {
      throw new BadRequestException('URL não é válida.')
    }

    // Criar verificação de usuário para ver se o mesmo existe.

    const id = new ShortUniqueId();
    const uniqueId = id(5);

    dataUrl.id = new ObjectId().toString();
    dataUrl.idUrl = uniqueId;

    const baseHost = config.localhost+':'+config.port.toString()+'/';
    dataUrl.shortUrl = baseHost+uniqueId;

    await this.repo.createAnalytics(dataUrl.id, 0);

    const dataLink = await this.repo.create(dataUrl);

    await createPreview(dataLink);

    return dataLink;

  }

  async redirectUrl(idUrl: string, req: Request){

    const url = await this.repo.findOneUrl(idUrl);

    return url.originUrl;
  }

  async analyticsShortLink(headers: any){

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
    
    if(!clicksInCache){
      const { clicks } = await this.repo.findOneAnalytics(id);
      await this.cache.set(id, clicks, 0);
      await this.repo.updateAnalytics(
        id, 
        clicks+1,
        data
      );
      console.log(clicks);
      return;
    }

    await this.repo.updateAnalytics(
      id, 
      clicksInCache+1,
      data
    );

  }

  async generatePreviews(){

    const previews = await this.repo.findAllUrls();

    previews.forEach(async(head: CreateLinkDto) => {
      await createPreview(head);
    })

    return {message: 'Prévias geradas com sucesso'};
    
  }

}