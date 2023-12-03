import { Column, Entity, ManyToOne } from "typeorm";
import { ILink } from "../../../common/types/interfaces/link.interface";
import { BaseEntity } from "../../../common/types/base-entity";
import { User } from "../../user/entities/user.entity";

@Entity('ticket')
export class Ticket extends BaseEntity {
    @Column({
        type: 'timestamptz',
        nullable: true,
    })
    from: Date;

    @Column({
        type: 'timestamptz',
        nullable: true,
    })
    to: Date;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    advantages: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    disadvantages: string;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    links: ILink[];

    @ManyToOne(() => User, (user) => user.tickets)
    user: User;
}
