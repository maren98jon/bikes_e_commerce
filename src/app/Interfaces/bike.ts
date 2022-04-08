import { BikeType } from "./bike-type";
import { PreSale } from "./pre-sale";
import { Sale } from "./sale";

export interface Bike {
    id?: number,
    name: string,
    brand: string,
    size: string,
    wheelSize: number,
    photo: string,
    originalPrice: number,
    price: number,
    amount: number,
    description: string,
    bikeTypes: BikeType[],
    preSales: PreSale[],
    sales: Sale[],
}
