import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { IFeedback } from "../../../core/feedback/feeback.interface";
import { FeedbackEntityType } from "../../../core/feedback/types";
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
        type: 'varchar',
        nullable: false,
    })
    related_entity_type: FeedbackEntityType;

    @ManyToMany(() => User, (user) => user.feedbacks)
    @JoinTable({
        name: 'user_feedbacks'
    })
    users: User[];
}
