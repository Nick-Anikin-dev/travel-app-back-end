import { FeedbackEntityType, FeedbackEntityTypeEnum } from "../../../core/feedback/types";
import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateFeedbackDto {
    @IsNotEmpty()
    @IsInt()
    related_entity_id: number;

    @IsNotEmpty()
    @IsEnum(FeedbackEntityTypeEnum)
    related_entity_type: FeedbackEntityTypeEnum;

    @IsNotEmpty()
    @IsInt()
    rate: number;

    @IsNotEmpty()
    @IsString()
    message: string;
}
