import { IBaseEntity } from "../../common/types/interfaces/base-entity.interface";
import { FeedbackEntityType } from "./types";

export interface IFeedback extends IBaseEntity {
    user_id: number;
    related_entity_id: number;
    related_entity_type: FeedbackEntityType;
    rate: number;
    message: string;
}
