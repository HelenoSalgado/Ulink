import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ShortenLinkService } from '../service/shortenLink.service';
import { CreateLinkDto } from '../dto/create-link-dto';
import { Request } from 'express';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { UpdateLinkDto } from '../dto/update-link.dto';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from '@prisma/client';


@Controller('links')
export class ShortenLinkController {
  constructor(private readonly service: ShortenLinkService) {}

  @Post('create')
  async createLink(
    @Body() createLinkDto: CreateLinkDto,
    ){
    return await this.service.createLink(createLinkDto);
  }

  @Get(':id')
  async findLink(@Param('id') id: string){

    return await this.service.findLink(id);

  }

  @Get('all/:idUser')
  async findLinks(@Param('idUser') idUser: string){

    return await this.service.findLinksUser(idUser);

  }

  @Get('recents/:idUser')
  async findLinksRecents(@Param('idUser') idUser: string){

    return await this.service.findLinksRecents(idUser);

  }

  @Put('update/:id')
  async updateLink(
    @Param('id') id: string,
    @Body() updateLinkDto: UpdateLinkDto,
    ){
    return await this.service.updateLink(id, updateLinkDto);

  }

  @Delete('delete/:id')
  async deleteLink(
    @Param('id') id: string,
    ){
    return await this.service.deleteLink(id);

  }

  @Public()
  @Get('analytics')
  async insertAnalytics(@Req() req: Request){

    this.service.analytics(req.headers);

  }

  @Get('get-analytics/:idUrl')
  async analyticsUrl(@Param('idUrl') idUrl: string,) {

    return await this.service.findAnalyticsUrl(idUrl);
  }

  @Get('get-urls-analytics/:idUser')
  async analyticsUrls(@Param('idUser') idUser: string) {

    return await this.service.findAnalyticsUrls(idUser);

  }

  @Roles(Role.ADMIN)
  @Put('generate-previews')
  async generatePreviews(@Req() req: Request){
    return await this.service.generatePreviews();
  }

  @Roles(Role.ADMIN)
  @Delete('clear-previews')
  async clearAllPrevias(){
    return await this.service.clearAllPreviews();
  }


}

