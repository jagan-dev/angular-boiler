import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyingSellingComponent } from './buying-selling/buying-selling.component';
import { GuestComponent } from './guest/guest.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



const routes: Routes = [
  {path:'nav-bar',component:NavBarComponent},
  {path:'buy',component:BuyingSellingComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
