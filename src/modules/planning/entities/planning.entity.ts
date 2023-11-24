import { User } from "../../user/entities/user.entity";
import { BaseEntity } from "../../../common/types/base-entity";
import { IPlanning } from "../../../core/planning/planning.interface";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('planning')
export class Planning extends BaseEntity implements IPlanning {
    @Column({
        type: 'int',
        nullable: false,
    })
    user_id: number;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    note: string;

    @Column({
        type: 'timestamptz',
        nullable: false,
    })
    from: Date;

    @Column({
        type: 'timestamptz',
        nullable: false,
    })
    to: Date;

    @Column({
        type: 'int',
        nullable: true,
    })
    country_id: number | null;

    @Column({
        type: 'int',
        nullable: true,
    })
    city_id: number | null;

    @Column({
        type: 'int',
        nullable: true,
    })
    place_id: number | null;

    @Column({
        type: 'int',
        nullable: true,
    })
    hotel_id: number | null;

    @ManyToOne(() => User, (user) => user.planning)
    user: User;
}
