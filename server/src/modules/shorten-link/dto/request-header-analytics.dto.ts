import { Request } from 'express';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
} from 'class-validator';


export class RequestAnalyticHeaderDto extends Request{

    @IsString()
    @IsOptional()
    @ApiProperty()
    id_analytic: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    city: string; 

    @IsString()
    @IsOptional()
    @ApiProperty()
    region: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    country: string; 
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    code_postal: string; 

    @IsString()
    @IsOptional()
    @ApiProperty()
    lat: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    lon: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    timezone: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    ip: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    referrer: string;

}