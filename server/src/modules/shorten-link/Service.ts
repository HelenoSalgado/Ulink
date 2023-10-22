import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ShortenLinkRepository } from './IRepository';
import ShortUniqueId from 'short-unique-id';
import { isURL } from 'class-validator';
import { CreateLinkDto } from './dto/create-link-dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ReqHeaderAnalytics } from 'src/constants/modelAnalytics';
import createPreview from './utils/createPreview';
import clearPreviews from './utils/clearPreviews';
import { UpdateLinkDto } from './dto/update-link.dto';
import baseUrl from '../../config/index'

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

    const uniqueId = new ShortUniqueId();

    dataUrl.id = uniqueId(32);
    dataUrl.idUrl = uniqueId(5);

    dataUrl.shortUrl = baseUrl.localhost+dataUrl.idUrl;

    const initAnalytics = {
      id: dataUrl.id,
      clicks: 0,
      idUrl: dataUrl.idUrl,
      idUser: dataUrl.idUser
    }

    //await this.repo.createAnalytics(initAnalytics);

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