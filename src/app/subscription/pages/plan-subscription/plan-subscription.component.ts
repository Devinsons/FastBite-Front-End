import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from "../../services/subscription.service";
import {Router} from "@angular/router";
import {PlanSubscription} from "../../model/plan-subscription.entity";
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../../components/dialog-content/dialog-content.component";

@Component({
  selector: 'app-plan-subscription',
  templateUrl: './plan-subscription.component.html',
  styleUrl: './plan-subscription.component.css'
})
export class PlanSubscriptionComponent implements OnInit{

  planSubscriptions: PlanSubscription[] = [];

  constructor(private subscriptionService:SubscriptionService,private router: Router,public dialog: MatDialog){

  }

  ngOnInit(): void {
    console.log("Iniciando la plataforma de suscripciones");
    this.getAllSubscriptions();
  }

  getAllSubscriptions() {
    this.subscriptionService.getAll().subscribe((response: any) => {
      console.log("Response", response);
      this.planSubscriptions = response;
      console.log("Subscriptions", this.planSubscriptions);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
