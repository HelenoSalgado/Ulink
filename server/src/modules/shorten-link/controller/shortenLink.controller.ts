import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ShortenLinkService } from '../service/shortenLink.service';
import { CreateLinkDto } from '../dto/create-link-dto';
import { Request } from 'express';
import { Public } from 'src/config/route.public';
import { ReqHeaderAnalytics } from 'src/constants/modelAnalytics';
import { RequestAnalyticHeaderDto } from '../dto/request-header-analytics.dto';
//import { SocketAddress } from 'net';


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
  async analyticsShortLink(
    @Req() req: Request){

    type SocketAddress = { address: string; port: number };

    let ip: any = req.ip || req.socket.remoteAddress || req.socket.address() as SocketAddress;

    if(ip.address) ip = ip.address;

    this.shortenService.analyticsShortLink(req.headers, ip);

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

