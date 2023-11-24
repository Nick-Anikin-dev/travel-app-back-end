import { BaseEntity, Entity } from "typeorm";

@Entity('currency')
export class Currency extends BaseEntity{
    symbol
}
