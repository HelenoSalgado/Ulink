import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user-dto';
import { UpdateUserDto } from '../dto/update-user-dto';
import msg from 'src/constants/msg';
import { Public } from 'src/config/route.public';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {

    try {
      await this.userService.create(createUserDto);
      return {statusCode: 200, message: msg.userCreatedSucess};
    } catch (err) {
      throw new BadRequestException(err.message);
    }

  }

  @Get(':id')
  async getUser(@Param('id') id: string){

    try {
      return await this.userService.findOne(id);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
    
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto){

    try {
      await this.userService.update(id, updateUser);
      return {statusCode: 200, message: msg.userUpdatedSucess};
    } catch (err) {
      throw new BadRequestException(err.message);
    }
    
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string){

    try {
      await this.userService.delete(id);
      return {statusCode: 202, message: msg.userDeletedSucess};
    } catch (err) {
      throw new BadRequestException(err.message);
    }
    
  }

  @Get()
  async getAll(){

    try {
      return await this.userService.findAll();
    } catch (err) {
      throw new BadRequestException(err.message);
    }
    
  }
}

