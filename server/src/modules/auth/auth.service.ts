import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/repository';
import { compareSync } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserRepository,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string) {

    const user = await this.usersService.findOneAuthentication(email);

    const comparePass = compareSync(pass, user.password);

    if (!comparePass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}