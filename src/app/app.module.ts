import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { SideNavigatorBarComponent } from './public/components/side-navigator-bar/side-navigator-bar.component';
import {MatButton, MatIconButton} from "@angular/material/button";

import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatCardModule} from "@angular/material/card";
import {RestaurantListComponent} from "./planning/components/restaurant-list/restaurant-list.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MenuListComponent } from './planning/components/menu-list/menu-list.component';
import {RouterModule} from "@angular/router";
import {PlanSubscriptionComponent} from "./subscription/pages/plan-subscription/plan-subscription.component";
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './subscription/components/dialog-content/dialog-content.component';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import { ProfileContentComponent } from './profile/components/profile-content/profile-content.component';
import { ProfileUpdateComponent } from './profile/pages/profile-update/profile-update.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIcon} from "@angular/material/icon";
import { HistoryOrderComponent } from './execution/components/history-order/history-order.component';
import { MadeOrderComponent } from './execution/pages/made-order/made-order.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatBadgeModule} from "@angular/material/badge";
import { HomeComponent } from './public/components/home/home.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { AuthLayoutComponent } from './iam/pages/auth-layout/auth-layout.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {AuthInterceptor} from "./iam/pages/sign-in/auth.interceptor";
import { ProductsAddComponent } from './planning/pages/products-add/products-add.component';
import {MatOption, MatSelect} from "@angular/material/select";
import { CartOrderComponent } from './planning/components/cart-order/cart-order.component';
import {MatList, MatListItem} from "@angular/material/list";
import { OrderComponent } from './execution/pages/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    SideNavigatorBarComponent,
    RestaurantListComponent,
    MenuListComponent,
    PlanSubscriptionComponent,
    DialogContentComponent,
    ProfileContentComponent,
    ProfileUpdateComponent,
    HistoryOrderComponent,
    MadeOrderComponent,
    HomeComponent,
    SignUpComponent,
    AuthLayoutComponent,
    SignInComponent,
    ProductsAddComponent,
    CartOrderComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButton,
    MatDrawerContainer,
    MatDrawer,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIcon,
    RouterModule,
    MatDialogModule,
    MatFormField,
    MatInput,
    MatToolbar,
    MatBadgeModule,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatIconButton,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatListItem,
    MatList,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
