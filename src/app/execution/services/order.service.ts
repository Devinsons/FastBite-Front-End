import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Order} from "../model/order.entity";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl: string = `${environment.serverBasePath}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getRestaurantByAcmeRecordId(acmeRestaurantRecordId: string): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/restaurants/${acmeRestaurantRecordId}`).pipe(
      map(response => response.id)
    );
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/orders`);
  }

  updateOrderStatus(orderId: number): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}/orders/${orderId}`,null)
  }
}
