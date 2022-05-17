import { IUser } from "src/app/shared/interfaces/user.interface";


export const usersDataMock: IUser[] = [
  {
    id: 0,
    name: 'First User',
    email: 'first_user@gmail.com',
    updatedAt: new Date(2022, 12, 12),
    transactions: [],
    active: true,
  },
  {
    id: 1,
    name: 'Second User',
    email: 'second_user@gmail.com',
    updatedAt: new Date(2022, 11, 11),
    transactions: [],
    active: true,
  },
  {
    id: 2,
    name: 'Third User',
    email: 'third_user@gmail.com',
    updatedAt: new Date(2022, 10, 10),
    transactions: [],
    active: false,
  },
];