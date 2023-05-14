import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user-dto';

@Controller('user')
export class ShortenLinkController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {

    return await this.userService.create(createUserDto);

  }

  @Get(':id')
  async getUser(){

    return await this.userService.findOne();

  }

  @Put('update')
  async update() {

    return await this.userService.update();

  }

  @Delete(':id')
  async generatePreviews(){

    return await this.userService.delete();

  }
}

