import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { ICity } from "../../../core/city/interfaces/city.interface";
import { Country } from "../../country/entities/country.entity";
import { ILink } from "../../../common/types/interfaces/link.interface";


@Entity('city')
export class City extends BaseEntity implements ICity {
    @Column({
        type: 'int',
        nullable: false,
    })
    country_id: number;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    common_name: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    ru_name: string | null;

    @ManyToOne(() => Country, (country) => country.cities)
    @JoinColumn({name: 'country_id'})
    country: Country;

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
