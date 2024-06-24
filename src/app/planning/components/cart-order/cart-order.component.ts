import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../model/IProduct";
import {CartService} from "../../services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrl: './cart-order.component.css'
})
export class CartOrderComponent implements OnInit{
  products: IProduct[] = [];
  restaurantId?: number;
  companyId?: number;

  constructor(private cartService: CartService , private orderService: OrderService,
  private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.cartService.productsObservable
      .subscribe((products: IProduct[]) => {
        this.products = products;
      });
    // Obtén el restaurantId desde la URL
    const acmeRestaurantRecordId = this.route.snapshot.paramMap.get('restaurantId');
    if (acmeRestaurantRecordId) {
      this.orderService.getRestaurantId(acmeRestaurantRecordId).subscribe(
        restaurant => {
          this.restaurantId = restaurant.id;
        },
        error => {
          console.error('Error fetching restaurant:', error);
        }
      );
    }

    // Obtén el companyId desde el localStorage
    const acmeCompanyRecordId = localStorage.getItem('acmeCompanyRecordId');
    if (acmeCompanyRecordId) {
      this.orderService.getCompanyId(acmeCompanyRecordId).subscribe(
        company => {
          this.companyId = company.id;
        },
        error => {
          console.error('Error fetching company:', error);
        }
      );
    }
  }

  removeProduct(product: IProduct) {
    this.cartService.removeProduct(product);
  }

  saveOrder() {
    if (this.companyId === undefined) {
      console.error('Company ID is not defined');
      return;
    }

    const orderItems = this.products.map(product => ({
      productId: product.id,
      quantity: product.quantity // Aquí puedes obtener la cantidad del input si es necesario
    }));

    const order = {
      companyId: this.companyId,
      restaurantId: this.restaurantId,
      items: orderItems
    };

    this.orderService.createOrder(order).subscribe(
      response => {
        console.log('Order created successfully:', response);
      },
      error => {
        console.error('Error creating order:', error);
      }
    );
  }

}
