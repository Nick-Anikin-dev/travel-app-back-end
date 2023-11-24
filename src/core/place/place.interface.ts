import { IBaseEntity } from "../../common/types/interfaces/base-entity.interface";
import { LatLng } from "../country/types";

export interface IPlace extends IBaseEntity {
    name: string;
    country_id: number | null;
    city_id: number | null;
    latlng: LatLng;
    description: string;
}
