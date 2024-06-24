export interface IOrder {
  orderId:      number;
  companyId:    number;
  restaurantId: number;
  orderStatus:  string;
  createdAt:    Date;
  items:        Item[];
}

export interface Item {
  orderItemId: number;
  productId:   number;
  quantity:    number;
}

