import { IsArray, IsInt, IsOptional, IsString } from "class-validator";
import { LatLng } from "../../../core/country/types";
import { ILink } from "../../../common/types/interfaces/link.interface";

export class UpdatePlaceDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsInt()
    country_id?: number | null;

    @IsOptional()
    @IsInt()
    city_id?: number | null;

    @IsOptional()
    @IsArray()
    @IsInt({each: true})
    latlng?: LatLng;

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
