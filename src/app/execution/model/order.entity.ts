import {Iorder} from "./order.interface";

export class Order implements Iorder {

  id: number;
  name: string;
  type: string;
  tiempoEntrega: string;
  state: string;
  fecha: Date;
  restaurantId: number;
  userId: number;

  constructor(id: number, name: string, type: string, tiempoEntrega: string, state: string, fecha: Date, restaurantId: number, userId: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.tiempoEntrega = tiempoEntrega;
    this.state = state;
    this.fecha = fecha;
    this.restaurantId = restaurantId;
    this.userId = userId;
  }

}
