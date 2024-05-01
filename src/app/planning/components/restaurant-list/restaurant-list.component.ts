import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../../services/restaurants.service";
import {Restaurant} from "../../model/restaurant.entity";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent implements OnInit{

  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantsService) {
  }
  ngOnInit(): void {
    console.log("Iniciando la plataforma");
    this.getAllRestaurants();
    this.getRestaurantById(2);
  }

  getAllRestaurants() {
    this.restaurantService.getAll().subscribe((response: any) => {
      console.log("Response", response);
    });
  }

  getRestaurantById(restaurantId: number) {
    this.restaurantService.getById(restaurantId).subscribe((response: any) => {
      console.log("Response", response);
    });
  }


}
