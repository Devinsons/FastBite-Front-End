import { Injectable } from '@angular/core';
import {IProduct} from "../model/IProduct";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: IProduct[] = [];

  private _products: BehaviorSubject<IProduct[]>;
  constructor() {
    this._products = new BehaviorSubject<IProduct[]>([]);
  }

  get productsObservable() {
    return this._products.asObservable();
  }

  addNewProduct(product: IProduct) {
    this.cartProducts.push(product);
    this._products.next(this.cartProducts);
  }

  removeProduct(product: IProduct) {
    const index = this.cartProducts.findIndex(p => p.id === product.id);
    this.cartProducts.splice(index, 1);
    this._products.next(this.cartProducts);
  }
}
