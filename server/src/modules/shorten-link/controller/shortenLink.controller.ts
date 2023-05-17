import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ShortenLinkService } from '../service/shortenLink.service';
import { CreateLinkDto } from '../dto/create-link-dto';
import { Request } from 'express';
import { Public } from 'src/config/route.public';



@Controller()
export class ShortenLinkController {
  constructor(private readonly shortenService: ShortenLinkService) {}

  @Post('shorten')
  async shortenUrl(
    @Body() createLinkDto: CreateLinkDto,
    @Req() req: Request, 
    ) {
    return await this.shortenService.shortenUrl(createLinkDto);

  }

  @Public()
  @Get('analytics')
  async analyticsShortLink(@Req() req: Request){

    this.shortenService.analyticsShortLink(req.headers);

  }

  // @Get('urls-analytics')
  // async analyticUrls() {

  //   //return await this.shortenService.analyticUrl();
  // }

  @Get('generate-previas')
  async generatePreviews(){
    return await this.shortenService.generatePreviews();
  }
}

