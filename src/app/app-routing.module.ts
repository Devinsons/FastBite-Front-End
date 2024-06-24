import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantListComponent} from "./planning/components/restaurant-list/restaurant-list.component";
import {MenuListComponent} from "./planning/components/menu-list/menu-list.component";
import {PlanSubscriptionComponent} from "./subscription/pages/plan-subscription/plan-subscription.component";
import {ProfileUpdateComponent} from "./profile/pages/profile-update/profile-update.component";
import {MadeOrderComponent} from "./execution/pages/made-order/made-order.component";
import {HomeComponent} from "./public/components/home/home.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {ProductsAddComponent} from "./planning/pages/products-add/products-add.component";
import {OrderComponent} from "./execution/pages/order/order.component";

const authRoutes: Routes = [
  {path:'login',component:SignInComponent},
  {path:'register',component:SignUpComponent}
];

const routes: Routes = [

  {path:'restaurants',component: RestaurantListComponent},
  {path:'restaurants/:restaurantId/menus',component:MenuListComponent},
  {path:'subscription',component:PlanSubscriptionComponent},
  {path:'profile',component:ProfileUpdateComponent},
  {path:'history',component:MadeOrderComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:SignUpComponent},
  {path:'login',component:SignInComponent},
  {path:'add-products',component:ProductsAddComponent},
  {path:'orders',component:OrderComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(authRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
