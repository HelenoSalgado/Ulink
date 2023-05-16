import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in-tdo';
import { Public } from 'src/config/route.public';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}
  
  @Public()
  @HttpCode(HttpStatus.OK)
    
  @Post('/login')
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }
}