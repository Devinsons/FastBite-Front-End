import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EjemploComponent} from "./execution/ejemplo/ejemplo.component";
import {Ejemplo1Component} from "./execution/ejemplo-1/ejemplo-1.component";

const routes: Routes = [
  {path:'ejemplo',component: EjemploComponent},
  {path:'ejemplo1',component: Ejemplo1Component},
  {path:'',redirectTo:'/ejemplo',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
