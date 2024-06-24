import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageUrl = 'assets/data/products.json';
  private imageUrlProfile = 'assets/data/profiles.json';

  constructor(private http: HttpClient) {}

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.imageUrl);
  }

  getProfileImages(): Observable<any[]> {
    return this.http.get<any[]>(this.imageUrlProfile);
  }
}
