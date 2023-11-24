import { FeedbackEntityType } from "../../../core/feedback/types";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateFeedbackDto {
    @IsNotEmpty()
    @IsInt()
    user_id: number;

    @IsNotEmpty()
    @IsInt()
    related_entity_id: number;

    @IsNotEmpty()
    related_entity_type: FeedbackEntityType;

    @IsNotEmpty()
    @IsInt()
    rate: number;

    @IsNotEmpty()
    @IsString()
    message: string;
}
