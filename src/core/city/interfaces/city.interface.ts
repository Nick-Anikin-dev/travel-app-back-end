import { IBaseEntity } from "../../../common/types/interfaces/base-entity.interface";

export interface ICity extends IBaseEntity {
    country_id: number;
    common_name: string;
    ru_name: string | null;
}
