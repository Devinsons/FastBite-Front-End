import {Component, OnInit} from '@angular/core';
import {Order} from "../../model/order.entity";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const acmeRestaurantRecordId = localStorage.getItem('acmeRestaurantRecordId');
    if (acmeRestaurantRecordId) {
      this.orderService.getRestaurantByAcmeRecordId(acmeRestaurantRecordId).subscribe(
        restaurantId => {
          this.orderService.getAllOrders().subscribe(
            orders => {
              this.orders = orders.filter(order => order.restaurantId === restaurantId);
            },
            error => {
              console.error('Error fetching orders:', error);
            }
          );
        },
        error => {
          console.error('Error fetching restaurant ID:', error);
        }
      );
    }
  }

  statusChange(order: Order) {
    this.orderService.updateOrderStatus(order.orderId).subscribe(
      updatedOrder => {
        order.orderStatus = updatedOrder.orderStatus;
      },
      error => {
        console.error('Error updating order status:', error);
      }
    );
  }
}
