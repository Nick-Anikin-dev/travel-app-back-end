import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { LatLng } from "../../../core/country/types";
import { ILink } from "../../../common/types/interfaces/link.interface";

export class CreateHotelDto {
    @IsNotEmpty()
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
