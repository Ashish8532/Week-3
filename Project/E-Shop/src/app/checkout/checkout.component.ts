import { Component, OnInit } from '@angular/core';
import { ShippingDetails } from '../Models/shipping-details';
import { CartService } from '../Service/cart.service';
import { CheckoutService } from '../Service/checkout.service';
import { Router } from '@angular/router';
import { CartItems } from '../Models/cart-items';
import { Order } from '../Models/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shippingDetails: ShippingDetails = {} as ShippingDetails;
  cartItems: CartItems = { products: [], totalPrice: 0 };
  totalPrice = 0;

  constructor(private cartService: CartService, private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems.products = items;
      this.totalPrice = this.cartService.calculateTotalPrice(); // Use the calculated total price from the service
    });
  } 

  placeOrder() {
    const order: Order = {
      id: this.generateUniqueId(), // Generate a unique ID
      shippingDetails: this.shippingDetails,
      cartItem: [{
        products: this.cartItems.products, // Use the actual cart items
        totalPrice: this.cartItems.totalPrice
      }], // Convert to an array of CartItems
      totalPrice: this.totalPrice,
      orderDate: new Date()
    };

      this.checkoutService.setOrderedItems(order);
      console.log(order);

      // Clear the cart after placing the order
      this.cartService.clearCart();
      // Navigate to the order confirmation page
      this.router.navigate(['/order-confirmation']);
  }

  generateUniqueId(): number {
    return Math.floor(Math.random() * 1000000); // Replace with a more robust ID generation logic
  }
}
