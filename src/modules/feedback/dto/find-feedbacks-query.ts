import { Order } from "../../../common/types";
import { IsOptional, IsString } from "class-validator";

export class FindFeedbacksQuery {
    @IsOptional()
    @IsString()
    order_by: string = 'created_at';

    @IsOptional()
    order: Order = 'DESC';
}
