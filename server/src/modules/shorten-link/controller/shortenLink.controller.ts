import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ShortenLinkService } from '../service/shortenLink.service';
import { CreateLinkDto } from '../dto/create-link-dto';
import { Request, Response } from 'express';

@Controller()
export class ShortenLinkController {
  constructor(private readonly shortenService: ShortenLinkService) {}

  @Post('short-link')
  shortenUrl(@Body() createLinkDto: CreateLinkDto) {

    return this.shortenService.shortenUrl(createLinkDto);

  }

  @Get(':idUrl')
  async redirectUrl(
    @Res() res: Response, 
    @Req() req: Request, 
    @Param('idUrl') idUrl: string) {

    const analytics = req;

    const origin = await this.shortenService.redirectUrl(idUrl, analytics);
    //return res.redirect(origin);

  }

  @Get('short-link-analytics')
  async analyticUrls() {

    //return await this.shortenService.analyticUrl();

  }
}
