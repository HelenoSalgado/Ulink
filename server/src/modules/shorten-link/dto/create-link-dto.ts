import {
    IsNotEmpty,
    IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLinkDto {

  @IsOptional()
  id: string;

  @IsOptional()
  idUrl: string;

  @IsString()
  @IsNotEmpty()
  originUrl: string;

  @IsString()
  @IsOptional()
  shortUrl: string;

  @IsString()
  @IsOptional()
  title:    string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  urlImg:      string;

}