import { IBaseEntity } from "../../../common/types/interfaces/base-entity.interface";
import { Flag, Idd, LatLng, Side } from "../types";

export interface ICountry extends IBaseEntity {
    common_name: string;
    official_name: string;
    native_name: string | null;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    status: string;
    unMember: boolean;
    idd: Idd,
    independent: boolean;
    capital_name: string[];
    region: string;
    subregion: string;
    translations: {
        [key: string]: any,
    },
    latlng: LatLng;
    car_signs: string[];
    car_side: Side;
    land_locked: boolean;
    borders: string[];
    area: number;
    flags: Flag;
    flag_string: string;
    population: number;
    continents: string[];
    timezones: string[];
    start_of_week: string;
}
