import { PreSale } from "./pre-sale";
import { Sale } from "./sale";

export interface User {
    id?: number,
    name: string,
    lastName: string,
    mail: string,
    password?: string,
    accountType?: string,
    sales?: Sale[],
    preSales?: PreSale[],
}