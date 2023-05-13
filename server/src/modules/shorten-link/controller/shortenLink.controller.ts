import { Body, Controller, Get, Head, Param, Post, Render, Req, Res } from '@nestjs/common';
import { ShortenLinkService } from '../service/shortenLink.service';
import { CreateLinkDto } from '../dto/create-link-dto';
import { Request, Response } from 'express';

@Controller('h')
export class ShortenLinkController {
  constructor(private readonly shortenService: ShortenLinkService) {}

  @Post('shorten')
  async shortenUrl(@Body() createLinkDto: CreateLinkDto) {

    return await this.shortenService.shortenUrl(createLinkDto);

  }

  // @Get(':idUrl')
  // async redirectUrl(
  //   @Res() res: Response, 
  //   @Req() req: Request, 
  //   @Param('idUrl') idUrl: string) {
      

  //   const origin = await this.shortenService.redirectUrl(idUrl, req);
  //   return res.redirect(origin);

  // }

  @Get('urls-analytics')
  async analyticUrls() {

    //return await this.shortenService.analyticUrl();
  }

  @Get('generate-previas')
  async generatePreviews(){
    return await this.shortenService.generatePreviews();
  }
}

