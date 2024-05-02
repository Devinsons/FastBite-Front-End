import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { SideNavigatorBarComponent } from './public/components/side-navigator-bar/side-navigator-bar.component';
import {MatButton} from "@angular/material/button";

import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatSidenavModule} from '@angular/material/sidenav';
import { EjemploComponent } from './execution/ejemplo/ejemplo.component';
import { Ejemplo1Component } from './execution/ejemplo-1/ejemplo-1.component';

import {MatCardModule} from "@angular/material/card";
import {RestaurantListComponent} from "./planning/components/restaurant-list/restaurant-list.component";
import {HttpClientModule} from "@angular/common/http";
import { MenuListComponent } from './planning/components/menu-list/menu-list.component';
import { ProfileContentComponent } from './profile/components/profile-content/profile-content.component';
import { ProfileUpdateComponent } from './profile/pages/profile-update/profile-update.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIcon} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    SideNavigatorBarComponent,
    EjemploComponent,
    Ejemplo1Component,
    RestaurantListComponent,
    MenuListComponent,
    ProfileContentComponent,
    ProfileUpdateComponent
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
    MatIcon
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
