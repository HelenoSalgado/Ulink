import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/repository';
import { compareSync } from 'bcryptjs';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserRepository,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string, req: Request) {

    const user = await this.usersService.findOneAuthentication(email);

    const comparePass = compareSync(pass, user.password);

    if (!comparePass) {
      throw new UnauthorizedException();
    }

    const  payload = { 
      id: user.id, 
      role: user.role 
    } as { id: string, role: string };

    //req['sub'] = payload
   
    return { 
      firstName: user.firstName,
      access_token: await this.jwtService.signAsync(payload),
    };
  };

  async signInVerify(token: string) {
    return {
      access_token: await this.jwtService.verify(token),
    };
  }
}