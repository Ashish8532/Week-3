import { Component, OnInit } from '@angular/core';
import { ShippingDetails } from '../Models/shipping-details';
import { Product } from '../Models/product';
import { CartService } from '../Service/cart.service';
import { CheckoutService } from '../Service/checkout.service';
import { Router } from '@angular/router';
import { CartItems } from '../Models/cart-items';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shippingDetails: ShippingDetails = {
    name: '',
    address: '',
    phone: '',
    city: '',
    state: '',
    pincode: '',
  };

  cartItems: Product[] = [];
  totalCartPrice = 0;

  constructor(private cartService: CartService, private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalCartPrice = this.cartService.calculateTotalPrice(); // Use the calculated total price from the service
    });
  } 

  placeOrder() {
      const newCartItems: CartItems = {
        products: this.cartItems,
        totalPrice: this.totalCartPrice
      };

      this.checkoutService.setOrderedItems(newCartItems);
      console.log(newCartItems);
      this.checkoutService.setShippingDetails(this.shippingDetails);
      console.log(this.shippingDetails);

      // Clear the cart after placing the order
      this.cartService.clearCart();
      // Navigate to the order confirmation page
      this.router.navigate(['/order-confirmation']);
  }
}
