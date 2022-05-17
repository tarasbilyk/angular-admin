import { ITransaction } from "./transaction.interface";

export interface IUser{
    id: number;
    name: string;
    updateAt: Date;
    transactions: ITransaction[];
    active: boolean;
}