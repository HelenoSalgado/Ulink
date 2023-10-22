import { Controller, Get, Param, Req } from '@nestjs/common';
import { AnalyticsService } from './Service';
import { Request } from 'express';
import { Public } from 'src/modules/auth/decorators/public.decorator';


@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly service: AnalyticsService) {}

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

}

