import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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

  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/orders`,order);
  }

  getCompanyId(acmeCompanyRecordId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/companys/${acmeCompanyRecordId}`);
  }

  getRestaurantId(acmeRestaurantRecordId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/restaurants/${acmeRestaurantRecordId}`);
  }
}
