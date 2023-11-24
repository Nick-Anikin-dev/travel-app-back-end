import { LatLng } from "../../../core/country/types";
import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePlaceDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsInt()
    country_id: number | null;

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
}
