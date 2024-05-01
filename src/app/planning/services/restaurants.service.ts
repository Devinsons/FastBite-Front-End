import { Injectable } from '@angular/core';
import {FastBiteBaseService} from "../../shared/services/fast-bite-base.service";
import {Restaurant} from "../model/restaurant.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService extends FastBiteBaseService<Restaurant>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/restaurants';
  }

}
