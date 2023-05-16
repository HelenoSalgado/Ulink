import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLinkDto {

  @IsOptional()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  idUrl: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  idUser: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  originUrl: string;

  @IsString()
  @IsOptional()
  shortUrl: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  title:    string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  description: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  urlImg:      string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  pixel:       string;

}