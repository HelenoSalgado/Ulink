import { BadRequestException, ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { ShortenLinkRepository } from '../repository';
import ShortUniqueId from 'short-unique-id';
import { isURL } from 'class-validator';
import { CreateLinkDto } from '../dto/create-link-dto';
import { ObjectId } from 'bson'
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ReqHeaderAnalytics } from 'src/constants/modelAnalytics';
import createPreview from '../utils/createPreview';
import clearPreviews from '../utils/clearPreviews';
import { UpdateLinkDto } from '../dto/update-link.dto';
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

  async createLink(dataUrl: CreateLinkDto) {

    if(!isURL(dataUrl.originUrl)) {
      throw new BadRequestException('URL não é válida.')
    }

    const id = new ShortUniqueId();
    const uniqueId = id(5);

    dataUrl.id = new ObjectId().toString();
    dataUrl.idUrl = uniqueId;

    const baseHost = 'https://dashboard-cyco.onrender.com/' 
    //config.localhost+':'+config.port.toString()+'/';
    dataUrl.shortUrl = baseHost+uniqueId;

    const initAnalytics = {
      id: dataUrl.id,
      clicks: 0,
      idUrl: dataUrl.idUrl,
      idUser: dataUrl.idUser
    }

    await this.repo.createAnalytics(initAnalytics);

    const dataLink = await this.repo.createLink(dataUrl);

    await createPreview(dataLink);

    return dataLink;

  }

  async updateLink(id: string, data: UpdateLinkDto){

    const updatedLink = await this.repo.updateLink(id, data);
    await createPreview(updatedLink);
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve('resolved');
    //   }, 5000);
    // });
    return { message: 'Link atualizado com sucesso.' }

  }

  async deleteLink(id: string){

    await this.repo.deleteLink(id);
    return { message: 'Link deletado com sucesso.' }

  }

  async findLink(id: string){
    return await this.repo.findLink(id);
  }

  async findLinksUser(idUser: string){
    return await this.repo.findLinksUser(idUser);
  }

  async findLinksRecents(idUser: string){
    return await this.repo.findLinksRecents(idUser);
  }

  async findLinks(){
    return await this.repo.findLinks();
  }

  async findAnalyticsUrl(idUrl: string){
    return await this.repo.findAnalyticsUrl(idUrl);
  }

  async findAnalyticsUrls(idUser: string){
    return await this.repo.findAnalyticsUrls(idUser);
  }

  async analytics(headers: any){

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
      const { clicks } = await this.repo.findAnalyticsUrl(id);
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

    const previews = await this.repo.findLinks();

    previews.forEach(async(head: CreateLinkDto) => {
      await createPreview(head);
    })

    return {message: 'Prévias geradas com sucesso'};
    
  }

  async clearAllPreviews(){
    return await clearPreviews();
  }

}