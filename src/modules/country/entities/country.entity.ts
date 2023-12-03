import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { ICountry } from "../../../core/country/interfaces/country.interface";
import { CoatOfArms, Flag, Idd, LatLng, Maps, Side } from "../../../core/country/types";
import { City } from "../../city/entities/city.entity";
import { ILink } from "../../../common/types/interfaces/link.interface";

@Entity('country')
export class Country extends BaseEntity implements ICountry {
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
    })
    common_name: string;

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
    })
    official_name: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    native_name: string | null;

    @Column({
        type: 'int',
        nullable: true,
    })
    capital_id: number | null;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    tld: string[];

    @Column({
        type: 'varchar',
        nullable: true,
    })
    cca2: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    ccn3: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    cca3: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    cioc: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    status: string;

    @Column({
        type: 'boolean',
        nullable: false,
    })
    unMember: boolean;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    idd: Idd;

    @Column({
        type: 'boolean',
        nullable: true,
    })
    independent: boolean | null;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    capital_name: string[] | null;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    region: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    subregion: string;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    translations: {
        [key: string]: any,
    };

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    latlng: LatLng;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    car_signs: string[];

    @Column({
        type: 'varchar',
        nullable: true,
    })
    car_side: Side;

    @Column({
        type: 'boolean',
        nullable: true,
    })
    land_locked: boolean;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    borders: string[];

    @Column({
        type: 'decimal',
        nullable: false,
    })
    area: number;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    flags: Flag;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    flag_string: string;

    @Column({
        type: 'int',
        nullable: false,
    })
    population: number;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    continents: string[];

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    timezones: string[];

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    maps: Maps;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    coatOfArms: CoatOfArms

    @Column({
        type: 'varchar',
        nullable: true,
    })
    start_of_week: string;

    @OneToMany(() => City, (city) => city.country)
    cities: City[];

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
