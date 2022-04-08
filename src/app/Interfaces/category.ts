import { BikeType } from "./bike-type";

export interface Category {
    id?: number,
    name: string,
    bikeTypes: BikeType[],
}
