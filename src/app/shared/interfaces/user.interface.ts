import { ITransaction } from "./transaction.interface";

export interface IUser{
    id: number;
    name: string;
    email: string;
    updatedAt: Date;
    transactions: ITransaction[];
    active: boolean;
}