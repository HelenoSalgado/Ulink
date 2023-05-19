import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Req
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in-tdo';
import { Public } from './decorators/public.decorator'; 
import { Request } from 'express';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}
  
  @Public()
  @HttpCode(HttpStatus.OK)
    
  @Post('/login')
  async signIn(@Req() req: Request, @Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto.email, signInDto.password, req);
  }
}