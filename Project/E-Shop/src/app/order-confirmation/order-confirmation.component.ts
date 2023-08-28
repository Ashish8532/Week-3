import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../Service/checkout.service';
import { UserService } from '../Service/user.service';
import { Order } from '../Models/order';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  orderId: number = 0;
  order: Order | null = null;
  
  constructor(private checkoutService: CheckoutService, private userService: UserService) {}

  ngOnInit(): void {
    this.order = this.checkoutService.getLastPlacedOrder();
  }
}
