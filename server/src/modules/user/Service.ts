import { UserRepository } from './IRepository';
import type { CreateUserDto } from './dto/create-user-dto';
import type { UpdateUserDto } from './dto/update-user-dto';
import { genSaltSync, hashSync } from 'bcryptjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import ShortUniqueId from 'short-unique-id';

@Injectable()
export class UserService {

  constructor(private readonly repo: UserRepository) {}

  async create(data: CreateUserDto) {
      
    const userExist = await this.repo.findOneAuthentication(data.email);

    if(userExist) throw new BadRequestException('Usuário já existe.')

    data.id = new ShortUniqueId()(32);
    const salt = genSaltSync(12);
    data.password = hashSync(data.password, salt);

    return await this.repo.create(data);

  }

  async findOne(id: string){

    return await this.repo.findOne(id);

  }

  async update(id: string, data: UpdateUserDto){

    return await this.repo.update(id, data);
    
  }

  async delete(id: string){

    return await this.repo.delete(id);
    
  }

  async findAll(){
    console.log('service');
    return await this.repo.findAll();

  }

}