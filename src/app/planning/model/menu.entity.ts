import {Item, Imenu} from "./menu.interface";

export class Menu implements Imenu {
  id: number;
  entradas: Item[];
  segundo: Item[];
  bebidas: Item[];
  restaurantId: number;

  constructor() {
    this.id = 0;
    this.entradas = [];
    this.segundo = [];
    this.bebidas = [];
    this.restaurantId = 0;
  }
}

