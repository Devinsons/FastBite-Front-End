import {Iorder, Parametro} from "./order.interface";

export class Order implements Iorder {
  id: number;
  entradas: Parametro[];
  segundo: Parametro[];
  bebidas: Parametro[];
  tiempoEntrega: string;
  state: string;
  fecha: Date;
  restaurantId: number;
  userId: number;

  constructor() {
    this.id = 0;
    this.entradas = [];
    this.segundo = [];
    this.bebidas = [];
    this.tiempoEntrega = "";
    this.state = "";
    this.fecha = new Date();
    this.restaurantId = 0;
    this.userId = 0;
  }
}
