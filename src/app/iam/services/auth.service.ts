import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.serverBasePath}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  signIn(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authentication/sign-in`, { username, password });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('profileId');
    localStorage.removeItem('acmeRestaurantRecordId');
    localStorage.removeItem('acmeCompanyRecordId');
    // Puedes agregar lógica adicional aquí, por ejemplo, redireccionar a la página de login
  }
}
