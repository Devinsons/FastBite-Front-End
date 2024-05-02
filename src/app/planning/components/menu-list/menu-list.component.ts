import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../../services/restaurants.service";
import {Menu} from "../../model/menu.entity";
import {ActivatedRoute} from "@angular/router";
import transformJavaScript from "@angular-devkit/build-angular/src/tools/esbuild/javascript-transformer-worker";
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent implements  OnInit{

  menus: Menu[] = [];

  constructor(private restaurantService: RestaurantsService,private  route:ActivatedRoute) {

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
    console.log("Menu", items);
    console.log("Menu Id", items.id);
    console.log("Menu Name", items.name);
    console.log("Menu Name", items.category);
    console.log("Menu Name", items.urlToImage);
    console.log("Fecha", new Date());
  }


}
