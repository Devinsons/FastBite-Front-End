import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = `${environment.serverBasePath}`;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  signUp(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authentication/sign-up`, JSON.stringify(data), this.httpOptions);
  }

  createRestaurant(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/restaurants`, JSON.stringify(data), this.httpOptions);
  }

  createCompany(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/companys`, JSON.stringify(data), this.httpOptions);
  }
}
