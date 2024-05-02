import { Injectable } from '@angular/core';
import {FastBiteBaseService} from "../../shared/services/fast-bite-base.service";
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/order.entity";


@Injectable({
  providedIn: 'root'
})
export class ExecutionService extends FastBiteBaseService<Order>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/orders';
  }
}
