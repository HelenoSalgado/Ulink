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

  @IsNumber()
  @IsOptional()
  clicks?: number;

  @IsString()
  @IsOptional()
  fontTrafic?: string

  @IsString()
  @IsOptional()
  SO?:         string

  @IsString()
  @IsOptional()
  browser?:    string
  
  @IsString()
  @IsOptional()
  device?:     string

}