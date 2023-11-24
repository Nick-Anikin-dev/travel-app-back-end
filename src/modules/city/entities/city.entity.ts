import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { ICity } from "../../../core/city/interfaces/city.interface";
import { Country } from "../../country/entities/country.entity";

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
    country: Country;
}
