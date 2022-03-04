import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyingSellingComponent } from './guest/buying-selling/buying-selling.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'nav-bar',component:NavBarComponent},
  {path:'guest',component:GuestComponent},
  {path:'buy',component:BuyingSellingComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
