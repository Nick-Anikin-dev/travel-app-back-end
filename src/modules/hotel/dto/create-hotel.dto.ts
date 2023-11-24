import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { LatLng } from "../../../core/country/types";

export class CreateHotelDto {
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
