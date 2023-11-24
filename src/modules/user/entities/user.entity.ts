import { IUser } from "../../../core/user/user.interface";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { Planning } from "../../planning/entities/planning.entity";

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
}
