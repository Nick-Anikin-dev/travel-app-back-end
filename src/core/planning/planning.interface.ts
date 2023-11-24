import { IBaseEntity } from "../../common/types/interfaces/base-entity.interface";

export interface IPlanning extends IBaseEntity{
    user_id: number;
    country_id: number | null;
    city_id: number | null;
    place_id: number | null;
    hotel_id: number | null;
    from: Date;
    to: Date;
    note: string;
}
