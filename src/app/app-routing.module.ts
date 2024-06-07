import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantListComponent} from "./planning/components/restaurant-list/restaurant-list.component";
import {MenuListComponent} from "./planning/components/menu-list/menu-list.component";
import {PlanSubscriptionComponent} from "./subscription/pages/plan-subscription/plan-subscription.component";
import {ProfileUpdateComponent} from "./profile/pages/profile-update/profile-update.component";
import {MadeOrderComponent} from "./execution/pages/made-order/made-order.component";
import {DashboardContentComponent} from "./dashboard/pages/dashboard-content/dashboard-content.component";


const routes: Routes = [

  {path:'restaurants',component: RestaurantListComponent},
  {path:'restaurants/:restaurantId/menus',component:MenuListComponent},
  {path:'subscription',component:PlanSubscriptionComponent},
  {path:'profile',component:ProfileUpdateComponent},
  {path:'history',component:MadeOrderComponent},
  {path:'dashboard',component:DashboardContentComponent},
  {path:'**',component:MenuListComponent},
  {path:'',redirectTo:'/subscription',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
