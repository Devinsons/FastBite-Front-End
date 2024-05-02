import { Injectable } from '@angular/core';
import {PlanSubscription} from "../model/plan-subscription.entity";
import {FastBiteBaseService} from "../../shared/services/fast-bite-base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService extends FastBiteBaseService<PlanSubscription>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/suscriptionPlans';
  }
}
