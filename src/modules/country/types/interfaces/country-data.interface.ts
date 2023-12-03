import { CoatOfArms, Flag, LatLng, Maps, Side } from "../../../../core/country/types";

interface CountryName {
    common: string,
    official: string,
    nativeName: {
        [key: string]: Pick<CountryName, 'common' | 'official'>
    }
}

export type Currencies = {
    [key: string]: {
        name: string;
        symbol: string;
    }
}

export type Idd = {
    root: string;
    suffixes: string[]
}


export type ICountryData = {
    name: CountryName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    status: string;
    unMember: boolean;
    currencies: Currencies,
    idd: Idd,
    independent: boolean;
    capital: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    },
    translations: {
        [key: string]: CountryName,
    },
    latlng: LatLng;

    car: {
        signs: string[];
        side: Side;
    },
    landlocked: boolean;
    borders: string[];
    area: number;
    flags: Flag;
    flag: string;
    population: number;
    continents: string[];
    timezones: string[];
    startOfWeek: string;
    maps: Maps,
    coatOfArms: CoatOfArms,
    capitalInfo: {
        latlng: LatLng
    }
}
