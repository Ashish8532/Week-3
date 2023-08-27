import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Models/product';
import { ShippingDetails } from '../Models/shipping-details';
import { CartItems } from '../Models/cart-items';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private orderedItemsSubject = new BehaviorSubject<Product[]>([]);
  orderedItems$ = this.orderedItemsSubject.asObservable();

  private shippingDetailsSubject = new BehaviorSubject<ShippingDetails | null>(null);
  shippingDetails$ = this.shippingDetailsSubject.asObservable();

  private cartModelSubject = new BehaviorSubject<CartItems | null>(null);
  cartModel$ = this.cartModelSubject.asObservable();

  setOrderedItems(cartItems: CartItems) {
    this.cartModelSubject.next(cartItems);
  }

  setShippingDetails(details: ShippingDetails) {
    this.shippingDetailsSubject.next(details);
  }

  calculateTotalPrice(items: Product[]): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
}
