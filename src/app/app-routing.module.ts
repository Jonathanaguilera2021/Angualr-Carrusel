import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CarruselComponent } from './components/carrusel/carrusel.component';
import {HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  {path:"", redirectTo:"/carrusel", pathMatch: "full"},
  {path: "carrusel", component:CarruselComponent },
  {path: "nav-bar", component:NavBarComponent },
  {path: "home", component:HomeComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
