import { Column, Entity } from "typeorm";
import { IPlace } from "../../../core/place/place.interface";
import { LatLng } from "../../../core/country/types";
import { BaseEntity } from "../../../common/types/base-entity";

@Entity('place')
export class Place extends BaseEntity implements IPlace {
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

    @Column({
        type: 'int',
        nullable: true,
    })
    city_id: number | null;

    @Column({
        type: 'int',
        nullable: true,
    })
    country_id: number | null;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    latlng: LatLng;
}
