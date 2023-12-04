import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { IFeedback } from "../../../core/feedback/feeback.interface";
import { FeedbackEntityType, FeedbackEntityTypeEnum } from "../../../core/feedback/types";
import { User } from "../../user/entities/user.entity";

@Entity('feedback')
export class Feedback extends BaseEntity implements IFeedback {
    @Column({
        type: 'int',
        nullable: false
    })
    user_id: number;

    @Column({
        type: 'int',
        nullable: false
    })
    rate: number;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    message: string;

    @Column({
        type: 'int',
        nullable: false,
    })
    related_entity_id: number;

    @Column({
        type: 'enum',
        nullable: false,
        enum: FeedbackEntityTypeEnum,
    })
    related_entity_type: FeedbackEntityTypeEnum;

    @ManyToOne(() => User, (user) => user.feedbacks)
    @JoinColumn({
        name: 'user_id'
    })
    user: User;
}
