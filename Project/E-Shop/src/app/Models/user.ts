import { Order } from "./order";

export interface User {
   id: number;
    email: string;
  password: string;
  state: boolean;
  orderHistory: Order[];
}
