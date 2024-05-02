import { Injectable } from '@angular/core';
import {FastBiteBaseService} from "../../shared/services/fast-bite-base.service";
import {User} from "../model/user.entity";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProfileService extends FastBiteBaseService<User>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
  }
}
