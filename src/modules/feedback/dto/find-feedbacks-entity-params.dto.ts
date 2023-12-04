import { IsEnum, IsInt, IsNotEmpty } from "class-validator";
import { FeedbackEntityTypeEnum } from "../../../core/feedback/types";

export class FindFeedbacksEntityParamsDto {
    @IsNotEmpty()
    @IsInt()
    related_entity_id: number;

    @IsNotEmpty()
    @IsEnum(FeedbackEntityTypeEnum)
    related_entity_type: FeedbackEntityTypeEnum;
}
