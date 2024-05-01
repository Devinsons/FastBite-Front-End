import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { SideNavigatorBarComponent } from './public/components/side-navigator-bar/side-navigator-bar.component';

import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatSidenavModule} from '@angular/material/sidenav';
import { EjemploComponent } from './execution/ejemplo/ejemplo.component';
import { Ejemplo1Component } from './execution/ejemplo-1/ejemplo-1.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    SideNavigatorBarComponent,
    EjemploComponent,
    Ejemplo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardModule,
    MatDrawerContainer,
    MatDrawer,
    MatSidenavModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
