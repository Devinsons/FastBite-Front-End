import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FastBiteBaseService<T> {
  basePath:string=`${environment.serverBasePath}`;
  resourceEndpoint:string= '/resources';
  httpOptions={
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  }

  constructor(private  http:HttpClient) { }

  handleError(error: HttpErrorResponse) {
    console.log("Error completo:", error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  };

  private resourcePath() {
    return `${ this.basePath}${this.resourceEndpoint}`;
  }

  //Create Resource
  create(item: any){
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  //Delete Resource
  delete(id: any){
    return this.http.delete(`${ this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Update Resource
  update(id: any, item: any){
    return this.http.put<T>(`${ this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Get
  getAll(){
    return this.http.get<T>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Get by Id
  getById(id: any){
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  //ruta de ejemplo  https://api-fake-fastbite.onrender.com/restaurants/2?_embed=menus
  getEmbedResource(id: any, resource: string){
    return this.http.get<T>(`${this.resourcePath()}/${id}/?_embed=${resource}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
