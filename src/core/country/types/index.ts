export type LatLng = [ number, number ];

export type Idd = {
    root: string;
    suffixes: string[]
}

export type Flag = {
    png: string;
    svg: string;
    alt: string;
}

export type Maps = {
    googleMaps: string,
    openStreetMaps: string
}

export type CoatOfArms = {
    svg: string;
    png: string;
}

export type Side = 'right' | 'left';
