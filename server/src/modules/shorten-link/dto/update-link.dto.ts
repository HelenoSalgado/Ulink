import { OmitType } from "@nestjs/mapped-types";
import { PartialType } from "@nestjs/swagger";
import { CreateLinkDto } from "./create-link-dto";

export class UpdateLinkDto extends 
PartialType(OmitType(CreateLinkDto, ['idUser'])){}