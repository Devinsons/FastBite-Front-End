import {Component, OnInit} from '@angular/core';
import {ExecutionService} from "../../services/execution.service";
import {Order} from "../../model/order.entity";

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrl: './history-order.component.css'
})
export class HistoryOrderComponent implements OnInit{

  orders:Order[] = [];

  constructor(private orderService:ExecutionService) {

  }
  ngOnInit(): void {
    console.log("Iniciando la plataforma history-order");
    this.getOrdersHistory();
  }

  getOrdersHistory() {
    this.orderService.getAll().subscribe((response: any) => {
      console.log("Response", response);
      this.orders = response
    });
  }
}
