import { LatLng } from "../../../core/country/types";
import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ILink } from "../../../common/types/interfaces/link.interface";

export class CreatePlaceDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsInt()
    country_id: number | null;

    @IsOptional()
    @IsInt()
    city_id: number | null;

    @IsNotEmpty()
    @IsArray()
    @IsInt({each: true})
    latlng: LatLng;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    advantages?: string;

    @IsOptional()
    @IsString()
    disadvantages?: string;

    @IsOptional()
    links?: ILink[];
}
