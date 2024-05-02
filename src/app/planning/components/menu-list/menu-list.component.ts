import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../../services/restaurants.service";
import {Menu} from "../../model/menu.entity";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../../execution/model/order.entity";
import {ExecutionService} from "../../../execution/services/execution.service";
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent implements  OnInit{

  menus: Menu[] = [];
  idOrder: number = 4;

  constructor(private restaurantService: RestaurantsService,private  route:ActivatedRoute, private orderService:ExecutionService) {

  }
  ngOnInit(): void {
    console.log("Iniciando la plataforma menu-list");
    const id = this.route.snapshot.params['restaurantId'];
    this.getMenusByRestaurantId(id, "menus");
  }

  //Retornar menus por id de restaurante
  getMenusByRestaurantId(restaurantId: number, resource:string) {
    this.restaurantService.getEmbedResource(restaurantId, resource).subscribe((response: any) => {
      console.log("Response", response);
      this.menus = response['menus']
      console.log("Menus", this.menus)
    });
  }



  onCardClick(items:any) {
    this.idOrder = this.idOrder + 1;
   //quiero crear un objeto y hacer post
    const order = new Order(this.idOrder, items.name, items.type,"30 min", "En proceso", new Date(), items.restaurantId, 1);
    console.log("Order", order);
    this.orderService.create(order).subscribe((response: any) => {
      console.log("Response", response);
    });
  }
}
