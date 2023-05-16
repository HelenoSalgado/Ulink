import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ShortenLinkService } from '../service/shortenLink.service';
import { CreateLinkDto } from '../dto/create-link-dto';
import { analyticRequest } from '../utils/analyticRequest';
import { Request } from 'express';

@Controller()
export class ShortenLinkController {
  constructor(private readonly shortenService: ShortenLinkService) {}

  @Post('shorten')
  async shortenUrl(
    @Body() createLinkDto: CreateLinkDto,
    @Req() req: Request, 
    ) {

    const ipAddress = req.socket.remoteAddress;
    console.log(ipAddress);

    let response = await fetch(`http://ip-api.com/json/${ipAddress}?fields=61439`);
    // Crie a variável usuário e pegue a resposta da requisição
    let usuario = await response.json();
    console.log(usuario);

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

