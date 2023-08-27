import { CartItems } from "./cart-items";

export interface User {
    email: string;
  password: string;
  cart: CartItems; 
//   orderHistory: OrderModel[];
}
