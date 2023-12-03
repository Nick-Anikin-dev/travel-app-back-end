import { IUser } from "../../../core/user/user.interface";
import { Column, Entity, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { Planning } from "../../planning/entities/planning.entity";
import { Ticket } from "../../ticket/entities/ticket.entity";
import { Feedback } from "../../feedback/entities/feedback.entity";

@Entity('user')
export class User extends BaseEntity implements IUser {
    @Column({
        type: 'varchar',
        nullable: false,
    })
    email: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    first_name: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    last_name: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    password: string;

    @OneToMany(() => Planning, (planning) => planning.user)
    planning: Planning[];

    @OneToMany(() => Ticket, (ticket) => ticket.user)
    tickets: Ticket[];

    @ManyToMany(() => Feedback, (feedback) => feedback.users)
    @JoinTable({
        name: 'user_feedbacks'
    })
    feedbacks: Feedback[];
}
