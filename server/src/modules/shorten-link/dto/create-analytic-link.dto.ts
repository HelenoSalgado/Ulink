import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAnalyticLinkDto {

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