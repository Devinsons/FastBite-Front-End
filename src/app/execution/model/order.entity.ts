import {IOrder, Item} from "./IOrder.interface";


export class Order implements IOrder {
  orderId: number;
  companyId: number;
  restaurantId: number;
  orderStatus: string;
  createdAt: Date;
  items: Item[];

  constructor() {
    this.orderId = 0;
    this.companyId = 0;
    this.restaurantId = 0;
    this.orderStatus = '';
    this.createdAt = new Date();
    this.items = [];
  }



}
