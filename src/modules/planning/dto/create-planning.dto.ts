import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreatePlanningDto {
    @IsOptional()
    @IsString()
    note?: string;

    @IsNotEmpty()
    @IsDate()
    @Transform(({value}) => new Date(value))
    from: Date;

    @IsNotEmpty()
    @IsDate()
    @Transform(({value}) => new Date(value))
    to: Date;

    @IsOptional()
    @IsInt()
    country_id?: number;

    @IsOptional()
    @IsInt()
    city_id?: number;

    @IsOptional()
    @IsInt()
    place_id?: number;

    @IsOptional()
    @IsInt()
    hotel_id?: number;
}
