import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Order } from "./index";

export class BaseFindQuery {
    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsNumber()
    page?: number = 1;

    @IsOptional()
    @IsNumber()
    per_page?: number = 15;

    @IsOptional()
    @IsEnum(['ASC', 'DESC'])
    order?: Order = 'ASC';

    @IsOptional()
    @IsString()
    order_by?: string;
}
