import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/types/base-entity";
import { ICountry } from "../../../core/country/interfaces/country.interface";

@Entity('country')
export class Country extends BaseEntity implements ICountry{
    @Column({
        type: "varchar",
        nullable: false,
        unique: true,
    })
    name: string;
}
