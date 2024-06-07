import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FastBiteBaseService} from "../../shared/services/fast-bite-base.service";
import {Plato} from "../model/plato.entity";

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends FastBiteBaseService<Plato>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/segundos';
  }
}
