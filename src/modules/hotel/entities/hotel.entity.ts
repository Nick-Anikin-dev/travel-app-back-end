import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { ILink } from "../../../common/types/interfaces/link.interface";
import { LatLng } from "../../../core/country/types";
import { City } from "../../city/entities/city.entity";

@Entity('hotel')
export class Hotel extends BaseEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    city_id: number;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    description: string;

    @ManyToOne(() => City, (city) => city.hotels)
    city: City;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    latlng: LatLng;

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
}
