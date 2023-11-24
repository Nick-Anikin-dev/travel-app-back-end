import { Entity } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { IFeedback } from "../../../core/feedback/feeback.interface";
import { FeedbackEntityType } from "../../../core/feedback/types";

@Entity('feedback')
export class Feedback extends BaseEntity implements IFeedback {
    user_id: number;
    rate: number;
    message: string;
    related_entity_id: number;
    related_entity_type: FeedbackEntityType;
}
