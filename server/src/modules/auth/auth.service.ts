import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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

    if(!user) throw new NotFoundException('Usuário não existe');

    const comparePass = compareSync(pass, user.password);

    if (!comparePass) throw new UnauthorizedException('Email ou senha incorreta');

    const  payload = { 
      id: user.id, 
      role: user.role 
    } as { id: string, role: string };

    //req['sub'] = payload
   
    return { 
      user: {
        id: user.id,
        firstName: user.firstName
      },
      access_token: await this.jwtService.signAsync(payload),
    };
  };

  async signInVerify(token: string) {
    return {
      access_token: await this.jwtService.verify(token),
    };
  }
}