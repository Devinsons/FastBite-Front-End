import { Injectable } from '@angular/core';
import {FastBiteBaseService} from "../../shared/services/fast-bite-base.service";
import {User} from "../model/user.entity";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = `${environment.serverBasePath}/profiles`;

  constructor(private http: HttpClient) {}

  getById(profileId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${profileId}`);
  }

  update(profileId: number, profileData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${profileId}`, profileData);
  }
}
