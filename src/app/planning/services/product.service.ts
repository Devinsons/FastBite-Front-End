import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Product} from "../model/product.entity";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = `${environment.serverBasePath}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  createProduct(acmeRestaurantRecordId: string, product: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/restaurants/${acmeRestaurantRecordId}/products`, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getProductsByRestaurantId(restaurantRecordId: string): Observable<Product[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Product[]>(`${this.baseUrl}/restaurants/${restaurantRecordId}/products`, { headers });
  }

  private handleError(error: any) {
    console.error('Error en la solicitud', error);
    return throwError('Algo salió mal; por favor intente de nuevo más tarde.');
  }
}
