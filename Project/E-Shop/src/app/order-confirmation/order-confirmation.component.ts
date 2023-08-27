import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ShippingDetails } from '../Models/shipping-details';
import { CheckoutService } from '../Service/checkout.service';
import { CartItems } from '../Models/cart-items';
import { UserService } from '../Service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  cartItems: CartItems | null = null;
  shippingDetails: ShippingDetails | null = null;
  totalCartPrice = 0;

  isAuthenticated$: Observable<boolean>; 
  
  constructor(private checkoutService: CheckoutService, private userService: UserService) {
    this.isAuthenticated$ = this.userService.isAuthenticated$;
  }

  ngOnInit(): void {
    this.checkoutService.cartModel$.subscribe(items => {
      this.cartItems = items;
    });

    this.checkoutService.shippingDetails$.subscribe(details => {
      this.shippingDetails = details;
    });
  }
}
