import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EjemploComponent} from "./execution/ejemplo/ejemplo.component";
import {Ejemplo1Component} from "./execution/ejemplo-1/ejemplo-1.component";
import {RestaurantListComponent} from "./planning/components/restaurant-list/restaurant-list.component";
import {MenuListComponent} from "./planning/components/menu-list/menu-list.component";
import {ProfileUpdateComponent} from "./profile/pages/profile-update/profile-update.component";


const routes: Routes = [
  {path:'ejemplo',component: EjemploComponent},
  {path:'ejemplo1',component: Ejemplo1Component},
  {path:'restaurants',component: RestaurantListComponent},
  {path:'restaurants/:restaurantId/menus',component:MenuListComponent},
  {path:'profile',component:ProfileUpdateComponent},
  {path:'**',component:MenuListComponent},
  {path:'',redirectTo:'/restaurants',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
